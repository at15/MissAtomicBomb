// this is app.js
angular.module('example', ['summernote'])
    .controller('MainCtrl', function () {
        var ctrl = this;
        ctrl.dummy = "this is a dummy message";
        ctrl.text = "Hi mie!";
        ctrl.text2 = "Hie mie2!";
        ctrl.options = {
            height: 100,
            toolbar: [
                ['groupname', ['bomb']],
                ['g2', ['color']]
            ]

        };
        ctrl.imageUpload = function (files) {
            console.log(files);
        };
        ctrl.editor = {};
        ctrl.toolbarClick = function (evt) {
            console.log(evt);
            console.log(ctrl.editor);
            if(ctrl.editor._bomb){
                console.log('got bomb form toolbar click!');
                ctrl.editor._bomb = false;
            }
        }
    });