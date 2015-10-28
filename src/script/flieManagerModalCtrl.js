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

    // for not using the ugly input[type='file']
    function selectFile() {
        // FIXME: should not hard code id in code
        document.getElementById('file-input').click();
    }

    function fileChanged(files) {
        // this callback also need $scope.$apply
        $scope.$apply(function (ctrl) {
            console.log('file changed', files);
            ctrl.uploading = true;
            // put the file upload logic here
            // TODO: handle error
            var form = new FormData();
            var field = 'data';
            form.append(field, files[0]);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:8000/index.php/upload');
            xhr.upload.addEventListener('progress', function (evt) {
                if (evt.lengthComputable) {
                    var percent = (evt.loaded / evt.total) * 100 + '%';
                    console.log(percent);
                }
                else {
                    // No data to calculate on
                }
            }, false);
            // File uploaded
            xhr.addEventListener('load', function () {
                console.log('upload finished');
                // TODO: need $scope.$apply? yes
                $scope.$apply(function (ctrl) {
                    ctrl.uploading = false;
                });
            }, false);
            xhr.send(form);
        });
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