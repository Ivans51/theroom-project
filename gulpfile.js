var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create(),
    imagemin = require('gulp-imagemin');

gulp.task('scripts', function () {
    gulp.src('public/**/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'));
})

gulp.task('image', function(){
    gulp.src('public/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'));
})

gulp.task('styles', function () {
    gulp.src('sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'expended'
        }))
        .pipe(autoprefixer({
            versions: ['last 2 browsers']
        }))
        // .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream())
})

gulp.task('watch', function () {
    browserSync.init({
        /**
         * localhost/{name of the route} */
        proxy: "localhost:8080/"
    })
    gulp.watch('./*.php').on('change', browserSync.reload);
    //gulp.watch('./public/**/*.js', ['scripts']);
    gulp.watch('./sass/**/*.scss', ['styles']);
    gulp.watch("./**/*.vue").on('change', browserSync.reload);
})

gulp.task('default', ['scripts', 'styles', 'watch']);