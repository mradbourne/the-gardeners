var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');

gulp.task('less', function() {
  gulp.src('app/less/application.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('app/css'));
});

gulp.task('scripts', function() {
  gulp.src(['bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap/js/scrollspy.js',
            'bower_components/jquery.easing/jquery.easing.min.js',
            'app/js/jqBootstrapValidation.js',
            'app/js/royalslider/jquery.royalslider.min.js',
            'app/js/contactMe.js',
            'app/js/main.js'])
    .pipe(concat('application.js'))
    .pipe(gulp.dest('app/js'));
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
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/js/**/*.js', ['scripts']);
});


gulp.task('default', ['less', 'scripts', 'webserver', 'watch']);