import router from "../router";
import store from "../store"
import subMilliseconds from "date-fns/subMilliseconds";
import isAfter from "date-fns/isAfter";
import differenceInMilliSeconds from "date-fns/differenceInMilliseconds";
import parseISO from "date-fns/parseISO";

export function initSession() {
	return new Promise((resolve) => {
		let user = store.getters['loginModule/getUser'];
		if (!user.user) {
			console.log("No token expiry date. user probably never logged in");
            return router.push("/");
		}

		let tenMinutesBeforeExpiry = subMilliseconds(parseISO(user.user.expiry_date), 300);
		const now = new Date();

		if (isAfter(now, tenMinutesBeforeExpiry)) {
			console.log("Token expired/will expire in the next 1 minutes");
			store.commit('loginModule/logout');
            return router.push("/");
		}

		console.log("Token Ok. Expiring at " + parseISO(user.user.expiry_date));
        setTimeout(refreshTokens, differenceInMilliSeconds(tenMinutesBeforeExpiry, now));
	})
}

function refreshTokens() {
	store.dispatch('loginModule/refreshToken');
}