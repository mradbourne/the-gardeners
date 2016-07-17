var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('sass', function(){
  return gulp.src('app/scss/application.scss')
    .pipe(sass())
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

gulp.task('default', ['sass', 'webserver', 'watch']);