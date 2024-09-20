provider "aws" {
    region = "us-east-2"
}

# Define local values
locals {
    zone_id         = "zoneid"
    oauthtoken      = "token"
    email           = "email"
    phone           = "phone"
}

# Provider for us-east-1 (for other resources)
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

# Create the S3 bucket
resource "aws_s3_bucket" "website_bucket" {
  bucket = "test1.nandinibhatt.me"
  force_destroy = true  # Optional: allows Terraform to delete the bucket even if it has objects

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

# Define public access block settings for the S3 bucket
resource "aws_s3_bucket_public_access_block" "website_bucket_public_access" {
  bucket = aws_s3_bucket.website_bucket.id
  block_public_acls   = true
  ignore_public_acls  = true
  block_public_policy = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_policy" "bucket_policy" {
    bucket = aws_s3_bucket.website_bucket.id
  
    policy = jsonencode({
      Version = "2012-10-17",
      Statement = [
        {
          Effect    = "Allow",
          Principal = {
            AWS = aws_iam_role.codepipeline_role.arn
          },
          Action    = "s3:*",
          Resource  = [
            "arn:aws:s3:::${aws_s3_bucket.website_bucket.bucket}",
            "arn:aws:s3:::${aws_s3_bucket.website_bucket.bucket}/*",
          ]
        }
      ]
    })
  }

# ACM Certificate in us-east-1
resource "aws_acm_certificate" "cert" {
  provider            = aws.us_east_1
  domain_name       = "test1.nandinibhatt.me"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      type   = dvo.resource_record_type
      record = dvo.resource_record_value
    }
  }

  name    = each.value.name
  type    = each.value.type
  zone_id = local.zone_id
  records = [each.value.record]
  ttl     = 60
}

resource "aws_acm_certificate_validation" "cert_validation" {
  provider                = aws.us_east_1  
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

# Route 53 Zone
resource "aws_route53_zone" "main" {
  name = "nandinibhatt.me"
}

# Route 53 A Record
resource "aws_route53_record" "www" {
  zone_id = local.zone_id
  name    = "test1"
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = true
  }
}

# CloudFront Distribution
resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name = aws_s3_bucket.website_bucket.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.website_bucket.id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "ReactJS website for test1.nandinibhatt.me"
  default_root_object = "index.html"

  aliases = ["test1.nandinibhatt.me"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = aws_s3_bucket.website_bucket.id

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_100"

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate_validation.cert_validation.certificate_arn
    ssl_support_method  = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

# CloudFront Origin Access Identity
resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "OAI for test1.nandinibhatt.me"
}

# IAM Role for CodeBuild
resource "aws_iam_role" "codebuild_role" {
  name = "codebuild-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "codebuild.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_policy" "codebuild_logs_policy" {
    name        = "CodeBuildLogsPolicy"
    description = "Policy to allow CodeBuild to create and manage CloudWatch Logs"
    policy      = jsonencode({
      Version = "2012-10-17",
      Statement = [
        {
          Effect    = "Allow",
          Action    = [
            "logs:CreateLogGroup",
            "logs:CreateLogStream",
            "logs:PutLogEvents"
          ],
          Resource  = "*"
        }
      ]
    })
  }
  
  resource "aws_iam_role_policy_attachment" "codebuild_logs_policy_attachment" {
    role       = aws_iam_role.codebuild_role.name
    policy_arn  = aws_iam_policy.codebuild_logs_policy.arn
  }

resource "aws_iam_role_policy_attachment" "codebuild_attach" {
  role       = aws_iam_role.codebuild_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonS3FullAccess"
}

# IAM Role for CodePipeline
resource "aws_iam_role" "codepipeline_role" {
  name = "codepipeline-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "codepipeline.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_policy" "codepipeline_s3_policy" {
    name        = "CodePipelineS3Policy"
    description = "Policy to allow CodePipeline to access S3 bucket"
    policy      = jsonencode({
      Version = "2012-10-17",
      Statement = [
        {
          Effect = "Allow",
          Action = [
            "s3:GetObject",
            "s3:PutObject",
            "s3:ListBucket",
          ],
          Resource = [
            "arn:aws:s3:::codepipeline-artifacts-nandini",
            "arn:aws:s3:::codepipeline-artifacts-nandini/*",
          ],
        },
      ],
    })
  }

  resource "aws_iam_policy" "codepipeline_codebuild_policy" {
    name        = "CodePipelineCodeBuildPolicy"
    description = "Policy to allow CodePipeline to start builds in CodeBuild"
    policy      = jsonencode({
      Version = "2012-10-17",
      Statement = [
        {
          Effect = "Allow",
          Action = [
            "codebuild:StartBuild",
            "codebuild:BatchGetBuilds",
            "codebuild:BatchGetProjects"
          ],
          Resource = "*",
        },
        {
          Effect = "Allow",
          Action = "codebuild:ListBuildsForProject",
          Resource = "arn:aws:codebuild:us-east-2:975050059984:project/react-build"
        }
      ]
    })
  }
  
resource "aws_iam_role_policy_attachment" "codepipeline_codebuild_policy_attachment" {
  role       = aws_iam_role.codepipeline_role.name
  policy_arn  = aws_iam_policy.codepipeline_codebuild_policy.arn
}

resource "aws_iam_role_policy_attachment" "codepipeline_s3_policy_attachment" {
  role       = aws_iam_role.codepipeline_role.name
  policy_arn  = aws_iam_policy.codepipeline_s3_policy.arn
}

resource "aws_iam_role_policy_attachment" "codebuild_developer_access" {
  role       = aws_iam_role.codepipeline_role.name
  policy_arn  = "arn:aws:iam::aws:policy/AWSCodeBuildDeveloperAccess"
}

resource "aws_iam_role_policy_attachment" "codepipeline_attach" {
  role       = aws_iam_role.codepipeline_role.name
  policy_arn = "arn:aws:iam::aws:policy/AWSCodePipeline_FullAccess"
}

# S3 Bucket for CodePipeline Artifacts
resource "aws_s3_bucket" "pipeline_bucket" {
  bucket = "codepipeline-artifacts-nandini"
}

# CodeBuild Project
resource "aws_codebuild_project" "react_build" {
  name          = "react-build"
  service_role  = aws_iam_role.codebuild_role.arn
  artifacts {
    type = "S3"
    location = aws_s3_bucket.pipeline_bucket.bucket
    path = "build-output"
    packaging = "NONE"
  }
  environment {
    compute_type = "BUILD_GENERAL1_2XLARGE"
    image        = "aws/codebuild/standard:7.0"
    type         = "LINUX_CONTAINER"
    environment_variable {
      name  = "NODE_ENV"
      value = "production"
    }
  }
  source {
    type            = "GITHUB"
    location        = "https://github.com/nandineebhatt/personal-website.git"
    buildspec       = "buildspec.yml"
    git_clone_depth = 1
  }
}

# CodePipeline
resource "aws_codepipeline" "pipeline" {
  name     = "react-pipeline"
  role_arn = aws_iam_role.codepipeline_role.arn

  artifact_store {
    type     = "S3"
    location = aws_s3_bucket.pipeline_bucket.bucket
  }

  stage {
    name = "Source"
    action {
      name             = "Source"
      category         = "Source"
      owner            = "ThirdParty"
      provider         = "GitHub"
      version          = "1"
      output_artifacts = ["source_output"]

      configuration = {
        Owner       = "nandineebhatt"
        Repo        = "personal-website"
        Branch      = "main"
        OAuthToken  = local.oauthtoken
      }
    }
  }

  stage {
    name = "Build"
    action {
      name             = "Build"
      category         = "Build"
      owner            = "AWS"
      version          = "1"
      provider         = "CodeBuild"
      input_artifacts  = ["source_output"]
      output_artifacts = ["build_output"]

      configuration = {
        ProjectName = aws_codebuild_project.react_build.name
      }
    }
  }
}

# SNS Topic
resource "aws_sns_topic" "pipeline_notifications" {
  name = "pipeline-notifications"
}

resource "aws_sns_topic_subscription" "email_subscription" {
    topic_arn = aws_sns_topic.pipeline_notifications.arn
    protocol  = "email"
    endpoint  = local.email  # Replace with your email address
}

resource "aws_sns_topic_subscription" "sms_subscription" {
    topic_arn = aws_sns_topic.pipeline_notifications.arn
    protocol  = "sms"
    endpoint  = local.phone  # Replace with your phone number, including country code
}

# Lambda Role
resource "aws_iam_role" "lambda_role" {
  name = "lambda_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_attach" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy" "sns_policy" {
  name = "sns_policy"
  role = aws_iam_role.lambda_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "sns:Publish"
        ]
        Resource = aws_sns_topic.pipeline_notifications.arn
      }
    ]
  })
}

resource "aws_lambda_function" "sns_notification" {
  filename         = "lambda_function_payload.zip"
  function_name    = "sns_notification"
  role             = aws_iam_role.lambda_role.arn
  handler          = "index.handler"
  runtime          = "python3.12"
  source_code_hash = filebase64sha256("${path.module}/lambda_function_payload.zip")
  
  environment {
  variables = {
  SNS_TOPIC_ARN = aws_sns_topic.pipeline_notifications.arn
        }
    }
}

resource "aws_cloudwatch_event_rule" "pipeline_rule" {
  name        = "pipeline-rule"
  description = "Rule to trigger Lambda on CodePipeline state changes"
  event_pattern = jsonencode({
  "source": ["aws.codepipeline"],
  "detail-type": ["CodePipeline Pipeline Execution State Change"],
  "detail": {
  "state": ["SUCCEEDED", "FAILED"]
        }
    })
  }

resource "aws_cloudwatch_event_target" "lambda_target" {
    rule      = aws_cloudwatch_event_rule.pipeline_rule.name
    target_id = "lambda"
    arn       = aws_lambda_function.sns_notification.arn
}

resource "aws_lambda_permission" "allow_eventbridge" {
    statement_id  = "AllowExecutionFromEventBridge"
    action        = "lambda:InvokeFunction"
    function_name = aws_lambda_function.sns_notification.function_name
    principal     = "events.amazonaws.com"
    source_arn    = aws_cloudwatch_event_rule.pipeline_rule.arn
}
