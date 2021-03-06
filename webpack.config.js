const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },


    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        }]
    },
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
     }, {
         test: /\.scss$/,
         use: ['style-loader', 'css-loader', 'sass-loader'],
      }]
  }
};
