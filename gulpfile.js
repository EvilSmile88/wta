var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'),
    server = require("gulp-server-livereload"),
    sass = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/main.scss', 'src/scss/stats-main.scss', 'src/scss/tournament-main.scss', 'src/scss/coach-main.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
});

gulp.task('sass:watch', function () {
  gulp.watch('src/scss/*.scss', ['sass'])
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
  return gulp.src([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/popper.js/dist/umd/popper.js'
  ])
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
    .pipe(gulp.dest('build/css'));
  gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('build/js'));
  gulp.src('src/img/**/*')
    .pipe(gulp.dest('build/img'));
  return gulp.src('src/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('start', ['js', 'sass:watch', 'serve']);
