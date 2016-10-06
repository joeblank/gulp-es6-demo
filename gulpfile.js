const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

const jsPaths = ['./js/app.js', './js/**/*.js'];

gulp.task('concat', function() {
  gulp.src(jsPaths)
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./dist'))


})

gulp.task('es6', function() {
  gulp.src(jsPaths)
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('./dist'))
})

gulp.task('es6-bundle', function() {
  gulp.src(jsPaths)
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./dist'))
})
