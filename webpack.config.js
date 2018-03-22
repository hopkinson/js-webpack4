/**
 * @Date:   2018-03-22T09:46:42+08:00
 * @Last modified time: 2018-03-22T10:53:06+08:00
 */
var path = require('path')
module.exports = {
  entry: ['./index.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
}
