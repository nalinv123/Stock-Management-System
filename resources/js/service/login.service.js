import {
    forgotPasswordUrl,
    loginUrl,
    logoutUrl,
    refreshTokenUrl,
    resetPasswordUrl,
} from "../config/constant";
import { authHeader } from "../helper/authHeader";

export const loginService = {
    login,
    logout,
    forgotPassword,
    resetPassword,
    refreshToken,
};

/**
 * Calls the API to authenticate user
 * @param {*} userInput
 * @return {Object} Response from API if success
 * @throws {Error}
 */
function login(userInput) {
    const body = userInput;

    return window.axios.post(loginUrl, body).then(
        (user) => {
            // console.log(user);
            if (user !== undefined && user.data !== undefined) {
                return user.data;
            }
        },
        (err) => {
            // console.log('error ' + err);
            throw err;
        }
    );
}

/**
 * Calls the API to logout the user
 * @return {Object} Response from API if success
 * @throws {Error}
 */
function logout() {
    const headers = authHeader();
    return window.axios.post(logoutUrl, null, { headers: headers }).then(
        (res) => {
            // console.log(res);
            if (res !== undefined && res.data !== undefined) {
                return res.data;
            }
        },
        (err) => {
            throw err;
        }
    );
}

/**
 * Calls the API to send reset password link
 * @param {*} userInput
 * @return {Object} Response from API if success
 * @throws {Error}
 */
function forgotPassword(userInput) {
    return window.axios.post(forgotPasswordUrl, userInput).then(
        (res) => {
            // console.log(res);
            if (res !== undefined && res.data !== undefined) {
                return res.data;
            }
        },
        (err) => {
            throw err;
        }
    );
}

/**
 * Calls the API to reset the password
 * @param {*} userInput
 * @return {Object} Response from API if success
 * @throws {Error}
 */
function resetPassword(userInput) {
    return window.axios.post(resetPasswordUrl, userInput).then(
        (res) => {
            if (res !== undefined && res.data !== undefined) {
                return res.data;
            }
        },
        (err) => {
            throw err;
        }
    );
}

/**
 * Calls the API to refresh the authentication token
 * @return {Object} Response from API if success
 * @throws {Error}
 */
function refreshToken() {
    return window.axios.post(refreshTokenUrl).then(
        (user) => {
            if (user !== undefined && user.data !== undefined) {
                return user.data;
            }
        },
        (err) => {
            throw err;
        }
    );
}
