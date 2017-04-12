import path from 'path';
import loaders from './webpack-config/loaders';
import plugins from './webpack-config/plugins';

const entry = process.env.NODE_ENV === 'dev'
  ? ['webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './client/main.ts']
  : ['./client/main.ts'];

export default {
  devtool: 'inline-source-map',
  entry,
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  devServer: {
    contentBase: './public',
    publicPath: '',
    stats: {
      colors: true,
      timings: true,
      'errors-only': true
    },
    hot: true,
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [
      path.resolve('client'),
      'node_modules',
    ],
  },

  plugins,
  module: {
    rules: loaders,
  },
};
