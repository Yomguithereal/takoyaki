const path = require('path'),
      webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.worker\.js$/,
        use: ['worker-loader']
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    port: 3000
  }
};
