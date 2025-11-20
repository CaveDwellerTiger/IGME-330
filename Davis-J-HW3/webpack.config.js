const path = require('path');

module.exports = {
  entry: './web-audio-hw-2/src/main.ts',
  module: {
    rules: [
      {
        test: [/\.ts?$/,/\.js?$/],
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map'
};