/**
 * Created by gpl on 15/10/12.
 */
function fileManagerModalCtrl($modalInstance) {
    var ctrl = this;
    ctrl.dummy = 'file manager dummy';

    ctrl.upload = upload;
    ctrl.ok = ok;
    ctrl.cancel = cancel;

    ctrl.uploading = false;

    function upload() {
        console.log('start upload!');
        ctrl.uploading = true;
    }

    function ok() {
        console.log('ok');
        $modalInstance.close('close');

    }

    function cancel() {
        console.log('cancel');
        $modalInstance.dismiss('dismiss');
    }
}

angular.module('example')
    .controller(fileManagerModalCtrl.name, ['$modalInstance', fileManagerModalCtrl]);