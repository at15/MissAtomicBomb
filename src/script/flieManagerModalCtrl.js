/**
 * Created by gpl on 15/10/12.
 */
function fileManagerModalCtrl($scope, $modalInstance) {
    var ctrl = $scope;
    ctrl.dummy = 'file manager dummy';

    //ctrl.uploadFiles = uploadFiles;
    ctrl.ok = ok;
    ctrl.cancel = cancel;
    ctrl.uploading = false;
    ctrl.fileChanged = fileChanged;

    //console.log($('#file-input'));

    //$('#file-input').on('change', uploadFiles);
    //
    //function uploadFiles(evt) {
    //    var files = evt.currentTarget.files;
    //    console.log('handle files', files);
    //}

    function fileChanged() {
        console.log('file changed');
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
    .controller(fileManagerModalCtrl.name, ['$scope', '$modalInstance', fileManagerModalCtrl]);