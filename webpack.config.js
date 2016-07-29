var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'lib',
    filename: 'dynamic-css.min.js',
    library: 'DynamicCss',
    libraryTarget: 'umd'
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({
    //  compress: { warnings: false }
    //})
  ]
};
