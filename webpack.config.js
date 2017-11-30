const path = require('path');

module.exports = {
  entry: {
    'item': './src/item',
    'settings': './src/settings',
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'extension/js'),
  },

  module: {
    rules: [{
      test: /\.vue/,
      exclude: /node_modules/,
      loader: 'vue-loader',
      options: {
        loaders: {
          js: 'babel-loader'
        }
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
      }],
    }],
  },

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.min.js',
    },
  },
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true
      },
    }),
  ]
} else {
  module.exports.devtool = '#source-map';
}
