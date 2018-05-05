const gulp = require('gulp')
const sass = require('gulp-sass')
const shell = require('gulp-shell')
const browserSync = require('browser-sync').create()
const htmlmin = require('gulp-htmlmin')
/* ========== develop ========== */

// sass
gulp.task('sass', function () {
  return gulp.src(['./src/scss/main.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'))
})

// ejs to html
gulp.task('ejs2html', function (cb) {
  return gulp.src('*.js', { read: false })
    .pipe(shell([
      'echo $PWD', 'node ./index.js'
    ], { cwd: './src' }))
})

/* ---- browser-sync ---- */

// watch sass
gulp.task('reload-css', ['sass'], function (done) {
  browserSync.reload()
  done()
})

// watch ejs
gulp.task('reload-ejs', ['ejs2html'], function (done) {
  browserSync.reload()
  done()
})

// browsersync
gulp.task('dev', ['sass', 'ejs2html'], function () {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  })
  gulp.watch(['./src/scss/**/*.scss'], ['reload-css'])
  gulp.watch(['./src/index.ejs', './src/_config.yml'], ['reload-ejs'])
})

/* ========== bulid ========== */
gulp.task('html-prod', ['ejs2html'], function () {
  return gulp.src(['./src/index.html'])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('copy-lib', function () {
  gulp.src([
    './src/lib/jquery.fullpage.min.css',
    './src/lib/jquery.fullpage.min.js'
  ])
    .pipe(gulp.dest('./dist/lib/'))

  gulp.src([
    './src/assets/**/*.*'
  ])
    .pipe(gulp.dest('./dist/assets/'))
})

gulp.task('sass-prod', function () {
  return gulp.src(['./src/scss/main.scss'])
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
})

gulp.task('build', ['sass-prod', 'html-prod', 'copy-lib'])