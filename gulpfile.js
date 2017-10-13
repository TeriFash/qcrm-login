'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

//scss
gulp.task('scss', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});

//watch
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['scss'])
});


//default
gulp.task('default', ['watch', 'scss']);