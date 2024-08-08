# sudo apt install zip
# zip lambda_function_payload.zip lambda_function_payload.py

import json
import boto3

sns = boto3.client('sns')

def lambda_handler(event, context):
    detail = event.get('detail', {})
    status = detail.get('state', '')
    pipeline_name = detail.get('pipeline', '')

    if status == 'FAILED':
        message = f'Pipeline {pipeline_name} execution status: Failure'
    else:
        message = f'Pipeline {pipeline_name} execution status: Success'

    sns_topic_arn = os.environ.get('SNS_TOPIC_ARN')
    
    sns.publish(
        TopicArn=sns_topic_arn,
        Message=message
    )

    return {
        'statusCode': 200,
        'body': json.dumps('Notification sent successfully')
    }