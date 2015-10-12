/**
 * Created by gpl on 15/10/12.
 */

var _ = require('lodash');
var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var ngHtml2Js = require("gulp-ng-html2js");

var publicFolder = './server/public';
var jsFiles = [
    'src/script/app.js',
    'src/script/**/*.js',
    'src/script/controllers/**/*.js',
    'src/script/controllers/**/**/*.js'
];
var scssFiles = [
    'src/style/*.scss',
    'src/style/**/*.scss'
];
var templateFiles = [
    'src/template/*.html',
    'src/template/**/*.html'
];
gulp.task('client-script', function () {
    gulp.src(jsFiles)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(publicFolder + '/assets/javascript'));
});

gulp.task('style', function () {
    gulp.src(scssFiles)
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(publicFolder + '/assets/style'));
});

gulp.task('template', function () {
    gulp.src(templateFiles)
        .pipe(ngHtml2Js({
            moduleName: 'example',
            prefix: 'example/'
        }))
        .pipe(concat('tmpl.js'))
        .pipe(gulp.dest(publicFolder + '/assets/javascript'));
});
gulp.task('build', ['client-script', 'style', 'template'], function () {
    console.log('Building...');
});

gulp.task('watch', function () {
    gulp.watch(_.union(jsFiles,scssFiles,templateFiles), ['build']).on('change', function (file) {
        console.log(file.path, ' changed');
    });
});

gulp.task('dev', ['build', 'watch'], function () {

});

gulp.task('default', ['build'], function () {
    console.log('This is the default gulp task.');
});