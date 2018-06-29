var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'),
    watchSass = require("gulp-watch-sass"),
    server = require("gulp-server-livereload"),
    sass = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/main.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
});



// default task
gulp.task('sass:watch', ['sass'], function () {
  return watchSass([
    "./src/scss/*.{scss,css}",
  ])
    .pipe(sass())
    .pipe(gulp.dest("./src/css"))
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
    .pipe(gulp.dest("src/js"))
});

// Static Server + watching scss/html files

gulp.task('serve', function() {
  gulp.src('src')
    .pipe(server({
      livereload: true,
      open: true
    }));
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

gulp.task('start', ['js', 'sass:watch', 'serve']);
