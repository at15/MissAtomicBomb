/**
 * Created by gpl on 15/10/12.
 */

// gulpfile.js
var gulp = require('gulp');
var fs = require('fs');
var tam = require('tam');

// Set log level to INFO. See also log4js.
tam.log.setLevel('DEBUG');

gulp.task('build', function () {
    // Equivalent to run `tam` from commandline.
    tam.run();
});