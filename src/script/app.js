// this is app.js
angular.module('example', ['summernote'])
    .controller('MainCtrl', function () {
        var ctrl = this;
        ctrl.dummy = "this is a dummy message";
        ctrl.text = "Hi mie!";
        ctrl.text2 = "Hie mie2!";
        ctrl.options = {
            height: 100
        };
        ctrl.imageUpload = function(files){
            console.log(files);
        }
    });