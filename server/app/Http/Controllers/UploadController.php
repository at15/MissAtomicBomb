<?php
/**
 * Created by PhpStorm.
 * User: gpl
 * Date: 15/10/20
 * Time: 下午5:18
 */

namespace App\Http\Controllers;

final class UploadController extends Controller
{
    public function handleUpload()
    {
        var_dump($_FILES);
    }
}