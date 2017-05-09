require('babel-core/register');
require('babel-polyfill');

const path = require('path');

process.env.TEST = true;

const loaders = require('./webpack-config/loaders').default;
const plugins = require('./webpack-config/plugins').default;

module.exports = function (config) {
  const coverage = config.singleRun ? ['coverage'] : [];
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      'karma-jasmine',
      'karma-sourcemap-writer',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-chrome-launcher',
      'karma-coverage-istanbul-reporter',
      'karma-jasmine-html-reporter',
    ],
    files: [
      './client/test.ts'
    ],
    preprocessors: {
      './client/test.ts': [
        'webpack',
        'sourcemap',
      ],
      './client/**/!(*.test|tests.*).(ts|js)': [
        'sourcemap'
      ].concat(coverage)
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    coverageReporter: {
      reporters: [
        { type: 'json' }
      ],
      dir: './coverage/',
      subdir: (browser) => {
        return browser.toLowerCase().split(/[ /-]/)[0];
      }
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },

    webpack: {
      plugins,
      entry: './client/test.ts',
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['.ts', '.js'],
        modules: [
          path.resolve('client'),
          'node_modules',
        ],
      },
      stats: {
        colors: true,
        timings: true,
        errorDetails: true,
      },
      module: {
        rules: loaders,
      },
    },
    webpackServer: {
      noInfo: true,
    },
    reporters: ['spec', 'coverage-istanbul'].concat(coverage),
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    captureTimeout: 6000,
    autoWatch: true,
    browsers: ['Chrome'],// Chrome', 'Firefox'], // Alternatively: 'PhantomJS'
    singleRun: false
  });
};