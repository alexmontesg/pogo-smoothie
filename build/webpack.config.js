const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: ['./resources/scripts/main.js', './resources/styles/main.scss']
  },
  output: {
    path: path.resolve('public/'),
    filename: 'scripts/[name].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/[name].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.scss']
  }
};
