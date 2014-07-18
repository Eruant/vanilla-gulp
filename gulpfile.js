var gulp = require('./gulp')([
    'markup'
  ]);

gulp.task('compile', ['markup']);

gulp.task('default', ['compile']);
