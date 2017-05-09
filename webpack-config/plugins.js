import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import autoprefixer from 'autoprefixer';
import precss from 'precss';

export default [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    inject: true,
    minify: { removeAttributeQuotes: true },
    filename: 'index.html',
    chunks: true,
  }),
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '..'),
    verbose: true,
    dry: false,
  }),
  new webpack.optimize.UglifyJsPlugin({
    include: /\.min\.js$/,
    sourceMap: true,
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    options: {
      context: __dirname,
      postcss: [precss, autoprefixer],
    },
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  }),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'vendors',
  //   minChunks: Infinity,
  // }),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'manifest',
  //   minChunks: Infinity,
  // }),
  new ExtractTextPlugin({
    filename: 'bundle.css',
    disable: false,
    allChunks: true,
  }),
];
