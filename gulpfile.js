// -------------------------------------------------------------------------
// GET THINGS SET UP
// -------------------------------------------------------------------------

// Include Gulp
var gulp                    = require('gulp');

// CSS plugins
var sass                    = require('gulp-sass');
var autoprefixer            = require('gulp-autoprefixer');
var cssmin                  = require('gulp-cssmin');

// JS plugins
var concat                  = require('gulp-concat');
var uglify                  = require('gulp-uglify');

// General plugins
var browserSync             = require('browser-sync');
var reload                  = browserSync.reload;

// -------------------------------------------------------------------------
// TASKS
// -------------------------------------------------------------------------

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
// gulp.task('js', function() {
//     return gulp.src('js/**/*')
//         // Concatenate all JS files into one
//         .pipe(concat('production.js'))
//         // Minify JS
//         .pipe(uglify())
//         // Where to store the finalized JS
//         .pipe(gulp.dest('js'))
// });

// Watch files for changes
gulp.task('watch', ['browser-sync'], function() {
    // Watch HTML files
    gulp.watch('*.html', reload);
    // Watch Sass files
    gulp.watch('scss/**/*', ['css']);
    // Watch JS files
    gulp.watch('js/**/*', ['js']);
});

gulp.task('browser-sync', function() {
    browserSync.init(['css/*', 'js/*'], {
        server: {
            baseDir: ""
        }
    });
});

// Default task
gulp.task('serve', ['css', 'watch', 'browser-sync']);
