const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const ManifestPlugin = require('webpack-manifest-plugin');
const result = dotenv.config()
 
if (result.error) {
  throw result.error
}
 

const APP_DIR = path.resolve(__dirname, 'app/index.js');
const devMode = process.env.NODE_ENV !== 'production';
const config = {
  entry: { main: APP_DIR },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    alias: {
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    },
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx', '.css'],
  },
  devServer: {
    port: process.env.PORT || 3000,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'build'),
  },
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg|ttf|eot|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=[name].[ext]',
      },
      // You don't need any loader for .json anymore (since webpack >= v2.0.0).
      {
           type: 'javascript/auto',
           test: /\.json$/,
            exclude: /(node_modules)/,
            use: [{
              loader: 'file-loader',
              options: { name: '[name].[ext]' },
            }]
          }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.APP_NAME': JSON.stringify(process.env.APP_NAME || 'desmond.pro'),
      'process.env.APP_URL':  JSON.stringify(process.env.APP_URL || 'http://localhost:4005/'),
      'process.browser': 'true' 
    }),
    new SWPrecacheWebpackPlugin({
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          return;
        }
        console.log(message);
      }
      }),
    new ManifestPlugin({
      writeToFileEmit: true,
      seed: {}
    }),
  ],
};
module.exports = config;
