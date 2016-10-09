/**
 * Karma configuration, https://karma-runner.github.io.
 *
 * Test code are converted from ES2015 to ES5 by Babel and then are executed in a PhantomJS
 * browser using Jasmine.
 */

module.exports = function (config) {

  config.set({

    // PhantomJS provides headless javascript based web browser for tests to be executated in.
    browsers: ["PhantomJS"],

    files: [
      {
        pattern: "./spec/**/*Spec.js"
      }
    ],

    frameworks: ["jasmine"],

    preprocessors: {
      "./spec/**/*Spec.js": ["webpack"]
    },

    // Webpack config to enable Babel ES2015 to ES5 conversion.
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

    // Only perform a single run of the test suite and then stop.
    singleRun: true,

    // Make webpack operate silently.
    webpackServer: {
      noInfo: true
    }
  });
};
