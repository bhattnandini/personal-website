module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', 'webpack'],
      files: [
        'src/**/*.js',
        'test/**/*.test.js'
      ],
      preprocessors: {
        'src/**/*.js': ['webpack'],
        'test/**/*.test.js': ['webpack']
      },
      webpack: {
        module: {
          rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
                }
              }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
              test: /\.scss$/,
              use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[hash].[ext]',
                      outputPath: 'assets/images'
                    }
                  }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)(\?.*)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      limit: 10000, // Convert fonts < 10kb to base64 strings
                      name: '[name].[hash].[ext]',
                      outputPath: 'assets/fonts'
                    }
                  }
                ]
            }
          ]
        },
        resolve: {
          extensions: ['.js', '.jsx', '.css', '.scss']
        }
      },
      webpackMiddleware: {
        noInfo: true
      },
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      concurrency: Infinity
    });
  };