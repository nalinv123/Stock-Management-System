import { AES } from "./encryption";
import { loginService } from "../service/login.service";
import store from "../store";

/**
 * Refreshes the authentication token if it is invalid
 */
export function axiosInterceptor() {
    const interceptor = window.axios.interceptors.response.use(
        (response) => {
            return response;
        },
        async function (error) {
            if (error.response.status === 401) {
                const user = await loginService.refreshToken();
                store.commit("loginModule/loginSuccess", user);
                error.response.config.headers["Authorization"] =
                    "Bearer " + user.data.access_token;
                const data = JSON.stringify(user.data);
                sessionStorage.setItem("user", AES.encrypt(data));
                return window.axios(error.response.config);
            }
            return Promise.reject(error);
        }
    );
}
