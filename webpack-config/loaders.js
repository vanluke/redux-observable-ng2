const makeFileLoader = function (args) {
  switch (args) {
    case 'woff':
      return {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
          },
        }],
      };
    case 'ttf':
      return {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream',
          },
        }],
      };
    case 'svg':
      return {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml',
          },
        }],
      };
    case 'eot':
      return {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file',
        }],
      };
    case 'jpg':
      return {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            hash: 'sha512',
            digest: 'hex',
            name: 'hash].[ext]',
          },
        }, {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
            optimizationLevel: 7,
            interlaced: false,
          },
        }],
      };
    default:
      return {};
  }
};

export const js = {
  test: /\.js?$/,
  use: [
    'babel-loader',
  ],
  exclude: /node_modules/,
};

export const ts = {
  test: /\.ts?$/,
  use: [
    'ts-loader',
  ],
  exclude: /node_modules/,
};

export const sass = {
  test: /\.scss/,
  use: [
    'style-loader',
    'css-loader',
    'postcss-loader',
    'sass-loader',
  ],
};

export const json = {
  test: /\.json/,
  exclude: /node_modules/,
  use: [
    'json-loader',
  ],
};

export const tslint = {
  test: /\.ts$/,
  enforce: 'pre',
  loader: 'tslint-loader',
};

export const svgLoader = makeFileLoader('svg');
export const eotLoader = makeFileLoader('eot');
export const woffLoader = makeFileLoader('woff');
export const ttfLoader = makeFileLoader('ttf');
export const jpgLoader = makeFileLoader('jpg');

export default [tslint, ts, js, json, sass,
  svgLoader, eotLoader, woffLoader,
  ttfLoader, jpgLoader];
