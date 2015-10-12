// this is app.js
angular.module('example', ['ui.bootstrap']);

function MainCtrl($uibModal) {
    var ctrl = this;

    initEditor();

    function initEditor() {
        // generate the plugin here
        var tmpl = $.summernote.renderer.getTemplate();
        $.summernote.addPlugin({
            name: 'fm',
            init: function (layoutInfo) {
                //var $note = layoutInfo.holder();
                //console.log($note);
            },
            buttons: {
                fm: function () {
                    return tmpl.iconButton('fa fa-image', {
                        event: 'fm',
                        title: 'file manager'
                    });
                }
            },
            events: {
                fm: function () {
                    // open a dialog and let user upload
                    var modalInstance = $uibModal.open({
                        templateUrl: 'example/fileManagerModal.html',
                        controller: 'fileManagerModalCtrl as modal',
                        size: 'lg'
                    });
                    modalInstance.result.then(function () {
                        $('#editor').summernote('insertImage', '/upload/bomb.png', 'bomb.png');
                    }, function () {
                        console.log('modal dismiss');
                    })
                }
            }
        });

        $('#editor').summernote({
            lang: 'zh-CN',
            toolbar: [
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']],
                ['table', ['table']],
                ['fm', ['fm']]
            ]
        });
    }
}

angular.module('example')
    .controller(MainCtrl.name, ['$uibModal', MainCtrl]);