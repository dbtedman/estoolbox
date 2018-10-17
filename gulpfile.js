//
// Gulp configuration, https://www.npmjs.com/package/gulp.
//

const Gulp = require("gulp");
const ESLint = require("gulp-eslint");
const StyleLint = require("gulp-stylelint");

Gulp.task("eslint", () => Gulp.src([
  "./*.js",
  "./src/**/*.js",
  "./spec/**/*.js",
])
  .pipe(ESLint())
  .pipe(ESLint.format()));

Gulp.task("stylelint", () => Gulp.src([
  "./src/**/*.scss"
]).pipe(StyleLint({
  reporters: [{
    formatter: "string",
    console: true
  }]
})));

// TODO: https://jestjs.io
Gulp.task("test:unit", []);

Gulp.task("test:lint", [
  "eslint",
  "stylelint"
]);

Gulp.task("test", [
  "test:lint",
  "test:unit"
]);
