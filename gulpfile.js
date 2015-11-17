// gulp require
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	gulpif = require('gulp-if'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass');

gulp.task('connect', function() {
  connect.server({
    root: '',
		port :8000,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('**/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['**/*.html'], ['html']);
	gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['connect', 'watch']);
