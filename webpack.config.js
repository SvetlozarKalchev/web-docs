var webpack = require('webpack');
var path = require('path');

module.exports = {
    module: {
      loaders: [
        {
          loader: "babel-loader",
          
          exclude: /node_modules/,

          // Only run `.js` and `.jsx` files through Babel
          test: /.jsx?$/,

          // Options to configure babel with
          query: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'react'],
          }
        }
      ]
    },

  entry: [ './client/index.js' ],
  output: { filename: './bundle.js' }
}
