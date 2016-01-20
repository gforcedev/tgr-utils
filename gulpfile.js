var gulp = require('gulp'),
    rename = require('gulp-rename'),       // Used to rename *.* to *.min.*
    // Javascript
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


// Directories
var BUILD = './build/';

gulp.task('clean', function (cb) {
  del(BUILD + "**/*", cb);
});

gulp.task('js:minify', function() {
    return gulp.src([
        'js/*.js',
        'Bootstrap/*.js'
    ])
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(BUILD));
});

// Just build it
gulp.task('default', ['js:minify']);
