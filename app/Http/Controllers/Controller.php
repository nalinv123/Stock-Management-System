<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Carbon\Carbon;

class Controller extends BaseController
{
	use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
	
	/**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendResponse($respCode, $respDesc, $result)
    {
        $response = [
			'respCode' => $respCode,
			'respDesc' => $respDesc,
			'data'    => $result,
			'respTimestamp' => Carbon::now()->toDateTimeString()
        ];

        return response()->json($response, 200);
    }
}
