
var autoprefixer = require('autoprefixer');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
  /* creation of the index.html and the nicolasSlideShow using the following entry: index.js */
  entry: './src/index',
 
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'nicolasSlideShow.js'
  },

  module: {
   loaders: [
     {
       // Run js files through babel module
       test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/
     },
     {
        // Enable SCSS functionality
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?importLoaders=1", "sass-loader"]
     }
   ]
 },
 
  plugins: [
  /* creation of the index.html based on a templated located in the /template directory */
    new HtmlWebpackPlugin({
      template: __dirname+ '/template/indexTemplate.html',
      filename: 'index.html',
      inject: 'body'
  })]
};

module.exports = webpackConfig;


