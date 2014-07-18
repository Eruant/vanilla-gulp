var gulp = require('gulp'),
  jade = require('gulp-jade'),
  cfg = require('../config.js');

module.exports = function () {
  return gulp.task('markup', function () {
    return gulp.src(cfg.src.markup)
      .pipe(jade())
      .pipe(gulp.dest(cfg.dest.markup));
  });
};
