import { forgotPasswordUrl, loginUrl, logoutUrl, refreshTokenUrl, resetPasswordUrl } from '../config/constant';
import { authHeader } from '../helper/authHeader';

export const loginService = {
	login,
	logout,
	forgotPassword,
	resetPassword,
	refreshToken
};

function login(userInput) {
	const body = userInput;

	return window.axios.post(loginUrl, body)
		.then(
			user => {
				// console.log(user);
				if (user !== undefined && user.data !== undefined) {
					return user.data;
				}
			},
			err => {
				// console.log('error ' + err);
				throw err;
			}
		);
}

function logout() {
	const headers = authHeader();
	return window.axios.post(logoutUrl, null, { headers: headers })
		.then(
			res => {
				// console.log(res);
				if (res !== undefined && res.data !== undefined) {
					return res.data;
				}
			},
			err => {
				throw err;
			}
		)
}

function forgotPassword(userInput) {
	return window.axios.post(forgotPasswordUrl, userInput)
	.then(
		res => {
			// console.log(res);
			if (res !== undefined && res.data !== undefined) {
				return res.data;
			}
		},
		err => {
			throw err;
		}
	)
}

function resetPassword(userInput) {
	return window.axios.post(resetPasswordUrl, userInput)
	.then(
		res => {
			if (res !== undefined && res.data !== undefined) {
				return res.data;
			}
		},
		err => {
			throw err;
		}
	)
}

function refreshToken() {
	return window.axios.post(refreshTokenUrl)
	.then(
		user => {
			if (user !== undefined && user.data !== undefined) {
				return user.data;
			}
		},
		err => {
			// console.log('error ' + err);
			throw err;
		}
	)
}