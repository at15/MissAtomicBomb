<?php
/**
 * Created by PhpStorm.
 * User: gpl
 * Date: 15/10/20
 * Time: 下午5:18
 */

namespace App\Http\Controllers;

use Dy\Ring\Backend\LocalBackend;
use Dy\Ring\Rule\MimeTypeRule;
use Dy\Ring\Rule\SizeRule;
use Dy\Ring\Source\UploadedFile;
use Dy\Ring\Uploader;
use Dy\Ring\Exception\ExceptionInterface;

final class UploadController extends Controller
{
    public function handleUpload()
    {
        // use ring to handle the upload
        $rules = array(
            new SizeRule(10000),
            new MimeTypeRule(array('image/jpeg'))
        );

        try {
            $source = new UploadedFile("data");
            // note the working directory is public, where the index.php is
            $backend = new LocalBackend("upload");
            $uploader = new Uploader($backend, $source);
            $uploader->check();
            // TODO: move this logic to backend
            $backend->storeData($source);
            return response()->json(
                array('file' => $source->getInfo())
            );
        } catch (ExceptionInterface $e) {
            return response()->json(array(
                'msg' => $e->getMessage()
            ), 400);
        }
    }
}