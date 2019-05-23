const path = require('path');

module.exports = {
  entry: './app/assets/frontend/main.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/app/assets/javascripts')
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "babel-loader" }
    ]
  }
};