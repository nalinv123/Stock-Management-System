<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Validator;
use Config;
use App\Http\Controllers\Auth\LoginProxy;

class AuthController extends Controller
{
	private $loginProxy;

	public function __construct(LoginProxy $loginProxy) {
		$this->loginProxy = $loginProxy;
	}

    public function authenticate(Request $request) {
		Log::info(
            "Authenticate user request with ", 
            array('request' => $request->email)
		);
		
		$validator = Validator::make(
			$request->all(), [
				'email' => 'required|string|email',
				'password' => 'required|string'
			]
		);

		if ($validator->fails()) {
			Log::error(
				"Authenticate user request failed with validation error for user", 
				array
				(
					'user' => $request->email,
					'error' => $validator->errors()
				)
			);
			return $this->sendResponse("01", Config::get('constant.respDesc.01'), null);
		}

		try {
			$response = $this->loginProxy->attemptLogin($request->email, $request->password);
		} catch (\Exception $exp) {
			Log::error(
				"Authenticate user request failed with exception for user", 
				array
				(
					'user' => $request->email,
					'error' => $exp->getMessage()
				)
			);
			return $this->sendResponse("02", Config::get('constant.respDesc.02'), null);
		}
		if (is_null($response)) {
			Log::error(
				"Authenticate user request failed with bad credentials for user", 
				array
				(
					'user' => $request->email,
					'error' => Config::get('constant.respDesc.02')
				)
			);
			return $this->sendResponse("02", Config::get('constant.respDesc.02'), null);
		}
		Log::info(
			"Authenticate user request success for user",
			array(
				'user' => $request->email
			)
		);
		return $this->sendResponse("00", Config::get('constant.respDesc.00'), $response);
	}

	public function refresh(Request $request) {
		Log::info(
            "Refresh token request"
		);
		try {
			$response = $this->loginProxy->attemptRefresh();
		} catch (\Exception $exp) {
			Log::error(
				"Refresh token request failed with exception.", 
				array
				(
					'error' => $exp->getMessage()
				)
			);
			return $this->sendResponse("02", Config::get('constant.respDesc.02'), null);
		}
		if (is_null($response)) {
			Log::error(
				"Refresh token request failed with bad credentials.", 
				array
				(
					'error' => Config::get('constant.respDesc.02')
				)
			);
			return $this->sendResponse("02", Config::get('constant.respDesc.02'), null);
		}
		Log::info(
			"Refresh token request success."
		);
		return $this->sendResponse("00", Config::get('constant.respDesc.00'), $response);
	}

	public function logout() {
		Log::info(
            "Logout user request"
		);
		$this->loginProxy->logout();

		Log::info(
            "Logout user request success."
		);
		return $this->sendResponse("00", Config::get('constant.respDesc.00'), null);
	}
}
