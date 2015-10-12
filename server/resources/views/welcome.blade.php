<!DOCTYPE html>
<html>
    <head>
        <title>MissAtomicBomb</title>
        <link rel="stylesheet" href="/assets/bootstrap/dist/css/bootstrap.css">
        <link rel="stylesheet" href="/assets/font-awesome/css/font-awesome.css">
        <link rel="stylesheet" href="/assets/summernote/dist/summernote.css">
    </head>
    <body>
        <h1>editor</h1>
        <div id="summernote">You gonna miss me when I am gone</div>

        <script src="/assets/jquery/dist/jquery.js"></script>
        <script src="/assets/bootstrap/dist/js/bootstrap.js"></script>
        <script src="/assets/angular/angular.js"></script>
        <script src="/assets/summernote/dist/summernote.js"></script>
        <script src="/assets/summernote/lang/summernote-zh-CN.js"></script>
        <script>
            $(document).ready(function() {
                $('#summernote').summernote({
                    lang: 'zh-CN'
                });
            });

        </script>
    </body>
</html>
