var gulp = require('gulp'),
  jade = require('gulp-jade'),
  cfg = require('../config.js'),
  data = require('../../src/data');

module.exports = function () {
  return gulp.task('markup', function () {
    return gulp.src(cfg.src.markup)
      .pipe(jade({
        locals: data
      }))
      .pipe(gulp.dest(cfg.dest.markup));
  });
};
