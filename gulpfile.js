var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    pump = require('pump'),
    smushit = require('gulp-smushit'),
    babel = require('gulp-babel');

//Compiles the styles
gulp.task('styles', function() {
    pump([
        gulp.src('assets/styles/main.scss'),
        sass().on('error', sass.logError),
        autoprefixer( {
            browsers: [
                '> 1%',
                'last 2 versions',
                'firefox >= 4',
                'safari 7',
                'safari 8',
                'IE 8',
                'IE 9',
                'IE 10',
                'IE 11'
            ],
            cascade: false
        }),
        cssnano(),
        gulp.dest('dist/styles/')
    ]);
});

//Compiles javascript files
gulp.task('scripts', function(){
    pump([
        gulp.src('assets/scripts/*.js'),
        concat('bundle.js'),
        babel({
            presets: ['es2017']
        }),
        uglify(),
        jshint(),
        jshint.reporter('default'),
        gulp.dest('dist/scripts')
    ]);
});

//compresses & moves images into the distribution folder
gulp.task('images', function(){
    pump([
        gulp.src('assets/images/*'),
        smushit(),
        gulp.dest('dist/images')
    ]);
});

//Watches the main folders for changes and runs the relevant task
gulp.task('watch', function() {
    gulp.watch('assets/styles/**', ['styles']);
    gulp.watch('assets/scripts/**', ['scripts']);
    gulp.watch('assets/images/**', ['images']);
});

//only run at start up, runs all the main tasks so the dist folder is created with the necessary files.
gulp.task('init', ['styles', 'scripts', 'images']);