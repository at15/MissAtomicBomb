/**
 * Created by gpl on 15/10/12.
 */
// http://summernote.org/#/deep-dive#plugin-define
g_bomb = false;
var tmpl = $.summernote.renderer.getTemplate();
$.summernote.addPlugin({
    name: 'bomb',
    init: function (layoutInfo) {
        var $note = layoutInfo.holder();
        console.log($note);
    },
    buttons: {
        bomb: function () {
            return tmpl.iconButton('fa fa-user', {
                event: 'bomb',
                title: 'bomb',
                value: 123
            });
        }
    },
    events: {
        bomb: function (event, editor, layoutInfo, value) {
            console.log(event);
            console.log('bomb event');
            event.bomb = 1;
            event.data = {a: 1};
            $(event.currentTarget).data('value');
            console.log(value);
            event.stopPropagation(); // this does not work
            g_bomb = true;
        }
    }
});