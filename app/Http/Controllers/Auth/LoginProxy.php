<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Foundation\Application;
use GuzzleHttp\Client;
use App\User;

class LoginProxy
{
	const REFRESH_TOKEN = 'refresh_token';

	private $http;

	private $auth;

	private $cookie;

	private $db;

	private $request;

	public function __construct(Application $app, Client $http) {
		$this->http = $http;
        $this->auth = $app->make('auth');
        $this->cookie = $app->make('cookie');
        $this->db = $app->make('db');
        $this->request = $app->make('request');
	}

	/**
     * Attempt to create an access token using user credentials
     *
     * @param string $email
     * @param string $password
     */
	public function attemptLogin($email, $password) {
		// $user = $this->userRepository->getWhere('email', $email)->first();
		$user = User::where('email', $email)->first();

		if (!is_null($user)) {
			return $this->login('password', $email, $password, null);
		}

		return null;
	}

	/**
     * Attempt to refresh the access token used a refresh token that
     * has been saved in a cookie
     */
    public function attemptRefresh()
    {
        $refreshToken = $this->request->cookie(self::REFRESH_TOKEN);

        return $this->login('refresh_token', "", "", $refreshToken);
    }

    /**
     * Proxy a request to the OAuth server.
     *
     * @param string $grantType what type of grant type should be proxied
     * @param array $data the data to send to the server
     */
    public function login($grantType, $email, $password, $refreshToken)
    {
		if (!is_null($refreshToken)) {
			$data = [
				'grant_type' => $grantType,
				'client_id' => env('PASSWORD_CLIENT_ID'),
				'client_secret' => env('PASSWORD_CLIENT_SECRET'),
				'refresh_token' => $refreshToken
			];
		} else {
        	$data = [
				'grant_type' => $grantType,
				'client_id' => env('PASSWORD_CLIENT_ID'),
				'client_secret' => env('PASSWORD_CLIENT_SECRET'),
				'username' => $email,
				'password' => $password
			];
		}

        $response = $this->http->post('http://stock.management.to/oauth/token', [
			'form_params' => $data
		]);

        $data = json_decode($response->getBody());

        // Create a refresh token cookie
        $this->cookie->queue(
            self::REFRESH_TOKEN,
            $data->refresh_token,
            864000, // 10 days
            null,
            null,
            false,
            true // HttpOnly
        );

        return [
            'access_token' => $data->access_token,
            'expires_in' => $data->expires_in
        ];
    }

    /**
     * Logs out the user. We revoke access token and refresh token.
     * Also instruct the client to forget the refresh cookie.
     */
    public function logout()
    {
        $accessToken = $this->auth->user()->token();

        $refreshToken = $this->db
            ->table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true
            ]);

        $accessToken->revoke();

        $this->cookie->queue($this->cookie->forget(self::REFRESH_TOKEN));
    }
}