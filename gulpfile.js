var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'),
    useref = require('gulp-useref'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});


var scss = {
  in:  'src/scss/main.scss',
  out: 'src/css/main.css',
  watch: 'src/scss/main.css',
  sassOpts: {
    outputStyle: 'nested',
    precison: 3,
    errLogToConsole: true,
  }
};

// default task
gulp.task('sass:watch', ['sass'], function () {
  gulp.watch(scss.watch, ['sass']);
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass:watch'], function() {

  browserSync.init({
    server: "./src"
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
  gulp.watch("src/css/*.css").on('change', browserSync.reload);
  gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('build', function () {
  gulp.src('src/css/**/*.css')
    .pipe(prefix({
      browsers: ['last 3 versions']
    }))
    .pipe(gulp.dest('public/css'));
  gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('public/js'));
  return gulp.src('src/*.html')
    .pipe(gulp.dest('public'));
});

gulp.task('default', ['js','serve']);
