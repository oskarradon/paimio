// -------------------------------------------------------------------------
// GET THINGS SET UP
// -------------------------------------------------------------------------

// Include Gulp
var gulp                    = require('gulp');


// Include Jade
var jade                    = require('gulp-jade');

// CSS plugins
var sass                    = require('gulp-sass');
var autoprefixer            = require('gulp-autoprefixer');
var cssmin                  = require('gulp-cssmin');

// JS plugins
var concat                  = require('gulp-concat');
var uglify                  = require('gulp-uglify');
var del                     = require('del');

// General plugins
var browserSync             = require('browser-sync');
var reload                  = browserSync.reload;

// -------------------------------------------------------------------------
// TASKS
// -------------------------------------------------------------------------


// Jade tasks
gulp.task('jade', function() {
  return gulp.src('*.jade')
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest(''))
});


// CSS tasks
gulp.task('css', function() {
  return gulp.src('scss/**/*')
    // Compile Sass
    .pipe(sass({ style: 'compressed', noCache: true }))
    // parse CSS and add vendor-prefixed CSS properties
    .pipe(autoprefixer())
    // Minify CSS
    .pipe(cssmin())
    // Where to store the finalized CSS
    .pipe(gulp.dest('css'))
});

// JS tasks

gulp.task('cleanJs', function() {
  // Delete minified scripts
  del(['js/scripts.min.js']);
});

gulp.task('js', function() {
    return gulp.src('js/*')
        // Minify JS
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        // Where to store the finalized JS
        .pipe(gulp.dest('js/'))
});

// Watch files for changes
gulp.task('watch', ['browser-sync'], function() {
  // Watch HTML files
  gulp.watch('*.html', reload);
  // Watch Sass files
  gulp.watch('scss/**/*', ['css']);
  // Watch jade files
  gulp.watch('*.jade', ['jade']);
  // Watch JS files
  gulp.watch('scripts.js', ['cleanJs', 'js']);
});

gulp.task('browser-sync', function() {
  browserSync.init(['css/*', 'js/*'], {
    server: {
      baseDir: ""
    }
  });
});

// Default task
gulp.task('serve', ['css', 'jade', 'cleanJs', 'js', 'watch', 'browser-sync']);
