'use strict';
 
var runSequence = require('run-sequence');

var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


//----------------- High level tasks
gulp.task('build', function (callback) {
    runSequence(['sass'], callback)
});
//-----------------