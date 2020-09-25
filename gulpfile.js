'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssTimeStamp = require('gulp-timestamp-css-url');

gulp.task('sass', function () {
	return gulp.src('./src/styles/**/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(cssTimeStamp({useDate:true}))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('./src/styles/'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./src/styles/**/*.scss', gulp.series('sass'));
});
