const path = require('path'),
      webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.worker\.js$/,
        use: ['worker-loader']
      },
      {
        test: /\.woff2?$/,
        use: 'file-loader'
      },
      {
        test: /\.csv$/,
        use: 'raw-loader'
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
