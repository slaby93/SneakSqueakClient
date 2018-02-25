const gulp = require('gulp');
const watch = require('gulp-watch');
const webpack = require('gulp-webpack');
const rename = require('gulp-rename');

gulp.task('dev', ['landingpage', 'dashboard'], () => {
  // place code for your default task here
});

gulp.task('landingpage', () => watch('src/landingPage.html')
  .pipe(rename('index.html'))
  .pipe(gulp.dest('dist/')));


gulp.task('dashboard', () => {
  return gulp.src('src/index.js')
    .pipe(webpack())
    .pipe(gulp.dest('dist/dashboard/'));
});
