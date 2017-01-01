//
// Gulp configuration, https://www.npmjs.com/package/gulp.
//

const eslint = require("gulp-eslint");
const gulp = require("gulp");
const karma = require("karma");
const sasslint = require("gulp-sass-lint");

const jsSource = `${__dirname}/src/js`;
const jsTestSource = `${__dirname}/spec`;
const scssSource = `${__dirname}/src/scss`;

gulp.task("eslint", () => {
  gulp.src([
    `${jsSource}/**/*.js`,
    `${jsTestSource}/**/*.js`,
    `${__dirname}/*.js`
  ])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task("sasslint", () => {
  gulp.src([
    `${scssSource}/**/*.scss`
  ])
    .pipe(sasslint({configFile: `${__dirname}/.sass-lint.yml`}))
    .pipe(sasslint.format());
});

gulp.task("karma", (done) => {
  new karma.Server({
    configFile: `${__dirname}/src/gulp/karma.config.js`,
    singleRun: true
  }, done).start();
});

gulp.task("test:unit", [
  "karma"
]);

gulp.task("test:lint", [
  "eslint",
  "sasslint"
]);

gulp.task("test", [
  "test:lint",
  "test:unit"
]);
