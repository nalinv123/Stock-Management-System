<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Validator;
use Illuminate\Support\Facades\Password;
use Config;

class ForgotPasswordController extends Controller
{
    public function forgot(Request $request) {
		Log::info(
            "Forgot password request with ", 
            array('request' => $request->email)
		);

		$validator = Validator::make(
			$request->all(), [
			'email' => 'required|string|email'
		]);

		if ($validator->fails()) {
			Log::error(
				"Forgot password request failed with validation error for user", 
				array
				(
					'user' => $request->email,
					'error' => $validator->errors()
				)
			);
			return $this->sendResponse("01", Config::get('constant.respDesc.01'), null);
		}

		$resetLinkResponse = Password::sendResetLink($request->all());
		if ($resetLinkResponse == Password::INVALID_USER) {
			Log::error(
				"Forgot password request failed due to invalid user", 
				array
				(
					'user' => $request->email,
				)
			);
            return $this->sendResponse("06", Config::get('constant.respDesc.06'), null);
		}

		Log::info(
			"Forgot password request success for user",
			array(
				'user' => $request->email
			)
		);
		return $this->sendResponse("00", "Reset password link sent on your email id.", null);
	}

	public function resetPasswordForm() {
		return view('index');
	}

	public function reset(Request $request) {
		Log::info(
            "Reset password request with ", 
            array('request' => $request->email)
		);

		$validator = Validator::make(
			$request->all(), [
			'email' => 'required|string|email',
			'token' => 'required|string',
			'password' => 'required|string|confirmed'
		]);

		if ($validator->fails()) {
			Log::error(
				"Reset password request failed with validation error for user", 
				array
				(
					'user' => $request->email,
					'error' => $validator->errors()
				)
			);
			return $this->sendResponse("01", Config::get('constant.respDesc.01'), null);
		}

		$reset_password_status = Password::reset($request->all(), function ($user, $password) {
            $user->password = bcrypt($password);
            $user->save();
		});
		
		if ($reset_password_status == Password::INVALID_TOKEN) {
			Log::error(
				"Reset password request failed due to invalid token for user", 
				array
				(
					'user' => $request->email,
				)
			);
            return $this->sendResponse("04", Config::get('constant.respDesc.04'), null);
		}
		else if ($reset_password_status === Password::INVALID_USER) {
			Log::error(
				"Reset password request failed due to invalid user", 
				array
				(
					'user' => $request->email,
				)
			);
            return $this->sendResponse("06", Config::get('constant.respDesc.06'), null);
		}
		
		Log::info(
			"Reset password request success for user",
			array(
				'user' => $request->email
			)
		);
		return $this->sendResponse("00", "Password has been successfully changed.", null);
	}
}
