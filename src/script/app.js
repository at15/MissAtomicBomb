// this is app.js
angular.module('example', [])
    .controller('MainCtrl', function () {
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
                        return tmpl.iconButton('fa fa-user', {
                            event: 'fm',
                            title: 'file manager'
                        });
                    }
                },
                events: {
                    fm: function (event, editor, layoutInfo, value) {
                        // pop up dialog and then insert a image
                        //editor.insertImage('<img src="/upload/bomb.png"/>', 'bomb');
                        $('#editor').summernote('insertImage','/upload/bomb.png','bomb.png');
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
    });