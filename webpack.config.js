const HtmlWebPackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry:{
    'designSystem':'./src/index.js'
  },
  output:{
    path:__dirname + '/dist',
    filename:'[name].js'
  },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.(css|scss)$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: [ 'css-loader', 'sass-loader' ]
            })
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'img/'
                }
              }
            ]
          }          
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          chunks:['designSystem'],
          template: "./src/index.html",
          filename: "index.html"
        }),        
        new ExtractTextPlugin('style.css')
      ]
      ,
      devServer: {
        port:8080
      }
  };