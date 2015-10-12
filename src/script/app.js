// this is app.js
angular.module('example', ['summernote'])
    .controller('MainCtrl', function () {
        var ctrl = this;
        ctrl.dummy = "this is a dummy message";
        ctrl.text = "Hi mie!";
    });