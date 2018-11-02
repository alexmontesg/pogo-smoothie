module.exports = {
  entry: ['../resources/scripts/main.js'],
  output: {
    filename: '../../public/bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};
