/**
 * Karma configuration, https://karma-runner.github.io.
 */

module.exports = function (config) {
  config.set({

    browsers: ["PhantomJS"],

    files: [
      {
        pattern: "./spec/run.js"
      }
    ],

    frameworks: ["jasmine"],

    preprocessors: {
      "./spec/run.js": ["webpack"]
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.js/,
            exclude: /node_modules/,
            loader: "babel-loader"
          }
        ]
      },
      watch: false
    },

    singleRun: true,

    webpackServer: {
      noInfo: true
    }
  });
};
