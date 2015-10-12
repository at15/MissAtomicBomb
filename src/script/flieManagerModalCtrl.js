/**
 * Created by gpl on 15/10/12.
 */
function fileManagerModalCtrl($modalInstance) {
    var ctrl = this;
    ctrl.dummy = 'file manager dummy';

    ctrl.ok = ok;
    ctrl.cancel = cancel;

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