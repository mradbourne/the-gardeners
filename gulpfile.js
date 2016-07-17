var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var webserver = require('gulp-webserver');

gulp.task('less', function() {
  return gulp.src('app/less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('app/css'));
});

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('watch', function() {
    gulp.watch('app/scss/*.scss', ['sass']);
});

gulp.task('default', ['less', 'webserver', 'watch']);