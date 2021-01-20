import { AES } from "./encryption";

/**
 * authHeader
 * Fetches the authorization header from session storage.
 * @return { Object }
 */
export function authHeader() {
    // return authorization header with jwt token
    const encryptedUser = sessionStorage.getItem("user")
        ? sessionStorage.getItem("user")
        : null;

    const user = encryptedUser ? JSON.parse(AES.decrypt(encryptedUser)) : null;

    if (user && user.access_token) {
        return { Authorization: "Bearer " + user.access_token };
    } else {
        return {};
    }
}
