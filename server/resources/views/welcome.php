<!DOCTYPE html>
<html>
<head>
    <title>MissAtomicBomb</title>
    <link rel="stylesheet" href="/assets/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="/assets/font-awesome/css/font-awesome.css">
    <link rel="stylesheet" href="/assets/summernote/dist/summernote.css">
</head>
<body ng-app="example">
<h1>editor</h1>

<div ng-controller="MainCtrl as main">
    <!--FIXME: content inside directive won't use  bind value -->
    <summernote>{{main.dummy}}</summernote>
    <summernote ng-model="text" on-image-upload="main.imageUpload(files)"></summernote>
    {{text}}
    <summernote ng-model="text2" config="main.options" on-toolbar-click="main.toolbarClick(evt)"></summernote>
    {{text2}}
</div>
<!--<div id="summernote">You gonna miss me when I am gone</div>-->

<script src="/assets/jquery/dist/jquery.js"></script>
<script src="/assets/bootstrap/dist/js/bootstrap.js"></script>
<script src="/assets/summernote/dist/summernote.js"></script>
<script src="/assets/summernote/lang/summernote-zh-CN.js"></script>

<script src="/assets/angular/angular.js"></script>
<script src="/assets/angular-bootstrap/ui-bootstrap-tpls.js"></script>
<script src="/assets/angular-summernote/dist/angular-summernote.js"></script>
<script src="/assets/javascript/bundle.js"></script>
<script src="/assets/javascript/tmpl.js"></script>
<script>
    //    $(document).ready(function () {
    //        $('#summernote').summernote({
    //            lang: 'zh-CN',
    //            onImageUpload: function (files) {
    //                console.log('need to upload ');
    //                // so the image won't got inserted
    //            }
    //        });
    //    });

</script>
</body>
</html>
