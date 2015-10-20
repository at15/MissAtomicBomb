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
    ctrl.selectFile = selectFile;

    // for not using the ugly input[type="file"]
    function selectFile() {
        // FIXME: should not hard code id in code
        document.getElementById('file-input').click();
    }

    function fileChanged(files) {
        console.log('file changed', files);
        // put the file upload logic here
        var form = new FormData();
        form.append("file", files[0]);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8000/index.php/upload");
        xhr.send(form);
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