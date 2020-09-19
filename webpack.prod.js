const { merge } = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'production',
  performance: {
    // These options allows you to control how webpack notifies you of assets and entry points that exceed a specific file limit. 
    // hints: false,
    hints: 'warning',
    /*
    The maxAssetSize and maxEntrypointSize properties control the threshold sizes for assets and entry points, 
    respectively, and they are both set in bytes. The latter ensures that bundles created from the files listed 
    in the entry object (usually JavaScript or Sass files) do not exceed the specified threshold while the former 
    enforces the same restrictions on other assets emitted by webpack (e.g. images, fonts, etc.).
    */
    maxEntrypointSize: 250000,
    maxAssetSize: 250000,
  },
  optimization: {
    // https://engineering.wingify.com/posts/demystifying-split-chunks-plugin/
    splitChunks: {
       // include all types of chunks
      chunks: 'all',
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
});
