// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('assets/styles/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
          browsers:['> 1%', 'last 2 versions'],
          cascade: false
        }))
        .pipe(gulp.dest('src/'));
});

gulp.task('build', function() {
    return gulp.src('assets/styles/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
          browsers:['> 1%', 'last 2 versions'],
          cascade: false
        }))
        .pipe(gulp.dest('../build-todo/Todo List/src/'))
})

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('assets/styles/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'build']);