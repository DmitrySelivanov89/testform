const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const gulpStylelint = require('gulp-stylelint');

function style () { 
    return gulp.src('./scss/**/*.scss')

    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())

    .pipe(gulpStylelint({
      reporters: [
        {
          formatter: 'string',
          console: true}
      ]
    }));
}

// function lintCss() {
//     return gulp('./scss/**/*.scss')
//       .pipe(gulpStylelint({
//         reporters: [
//           {
//             formatter: 'string',
//             console: true}
//         ]
//       }));
// }


function watch () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
// exports.lintCss = lintCss;