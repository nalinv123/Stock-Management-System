import { addSeconds } from 'date-fns';
import { AES } from '../../helper/encryption';
import router from '../../router';
import { loginService } from '../../service/login.service';

// if (sessionStorage.getItem('user')) {
// 	encryptedUser = sessionStorage.getItem('user');
// }

var encryptedUser = sessionStorage.getItem('user') ? sessionStorage.getItem('user') : null;

const user = encryptedUser ? JSON.parse(AES.decrypt(encryptedUser)):null;

const state = user ? { status: { loggedIn: true}, user} : { status: {}, user: null};

const actions = {
	login({ dispatch, commit }, userInput) {
		commit('loginRequest', userInput );
		dispatch('loaderModule/showLoader', null, { root: true });

		loginService.login(userInput)
			.then(
				user => {
					if (user.respCode === '00') {
						commit('loginSuccess', user);
						dispatch('loaderModule/hideLoader', null, { root: true });
						user.data.expiry_date = addSeconds(new Date(), user.data.expires_in);
						const data = JSON.stringify(user.data);
						sessionStorage.setItem('user', AES.encrypt(data));
						router.push('/dashboard');
					} else {
						commit('loginFailure');
						dispatch('loaderModule/hideLoader', null, { root: true });
						const alert = {
							message: user.respDesc
						};
						dispatch('alertModule/showFailure', alert, { root: true });
					}
				}
			).catch(
				err => {
					dispatch('loaderModule/hideLoader', null, { root: true })
					if (err.response.status === 500) {
						const alert = {
							message: "Something went wrong. Please try again later."
						}
						sessionStorage.clear();
						dispatch('alertModule/showFailure', alert, { root: true });
					} else {
						const alert = {
							message: err.response.data.respDesc
						}
						sessionStorage.clear();
						dispatch('alertModule/showFailure', alert, { root: true });
					}
				}
			);
	},
	logout({ dispatch, commit }) {
		loginService.logout()
		.then(
			res => {
				if (res.respCode === '00') {
					commit('logout');
					sessionStorage.clear();
					router.push('/');
				}
				else {
					const alert = {
						message: res.respDesc
					}
					sessionStorage.clear();
					dispatch('alertModule/showFailure', alert, { root: true });
				} 
			}
		).catch(
			err => {
				dispatch('loaderModule/hideLoader', null, { root: true })
				if (err.response.status === 500) {
					const alert = {
						message: "Something went wrong. Please try again later."
					}
					sessionStorage.clear();
					dispatch('alertModule/showFailure', alert, { root: true });
				} else {
					const alert = {
						message: err.response.data.respDesc
					}
					sessionStorage.clear();
					dispatch('alertModule/showFailure', alert, { root: true });
				}
			}
		)
	},
	forgotPassword({ dispatch }, userInput) {
		dispatch('loaderModule/showLoader', null, { root: true });

		loginService.forgotPassword(userInput)
		.then(
			res => {
				dispatch('loaderModule/hideLoader', null, { root: true });
				let alert = {};
				if (res.respCode === '00') {
					alert = {
						message: res.respDesc
					};
					dispatch('alertModule/showSuccess', alert, { root: true });
				} else {
					alert = {
						message: res.respDesc
					};
					dispatch('alertModule/showFailure', alert, { root: true });
				}
			}
		).catch(
			err => {
				dispatch('loaderModule/hideLoader', null, { root: true })
				if (err.response.status === 500) {
					const alert = {
						message: "Something went wrong. Please try again later."
					}
					sessionStorage.clear();
					dispatch('alertModule/showFailure', alert, { root: true });
				} else {
					const alert = {
						message: err.response.data.respDesc
					}
					sessionStorage.clear();
					dispatch('alertModule/showFailure', alert, { root: true });
				}
			}
		)
	},
	resetPassword({ dispatch }, userInput) {
		dispatch('loaderModule/showLoader', null, { root: true });

		loginService.resetPassword(userInput)
		.then(
			res => {
				dispatch('loaderModule/hideLoader', null, { root: true });
				let alert = {};
				if (res.respCode === '00') {
					alert = {
						message: res.respDesc + " Please try to login with new password."
					};
					dispatch('alertModule/showSuccess', alert, { root: true });
				} else {
					alert = {
						message: res.respDesc
					};
					dispatch('alertModule/showFailure', alert, { root: true });
				}
			}
		).catch(
			err => {
				dispatch('loaderModule/hideLoader', null, { root: true })
				if (err.response.status === 500) {
					const alert = {
						message: "Something went wrong. Please try again later."
					}
					sessionStorage.clear();
					dispatch('alertModule/showFailure', alert, { root: true });
				} else {
					const alert = {
						message: err.response.data.respDesc
					}
					sessionStorage.clear();
					dispatch('alertModule/showFailure', alert, { root: true });
				}
			}
		)
	},
	refreshToken({ dispatch, commit }, userInput) {
		commit('loginRequest', userInput );
		dispatch('loaderModule/showLoader', null, { root: true });

		loginService.refreshToken()
			.then(
				user => {
					if (user.respCode === '00') {
						commit('loginSuccess', user);
						dispatch('loaderModule/hideLoader', null, { root: true });
						user.data.expiry_date = addSeconds(new Date(), user.data.expires_in);
						const data = JSON.stringify(user.data);
						sessionStorage.setItem('user', AES.encrypt(data));
					} else {
						commit('loginFailure');
						dispatch('loaderModule/hideLoader', null, { root: true });
						const alert = {
							message: user.respDesc
						};
						dispatch('alertModule/showFailure', alert, { root: true });
					}
				}
			).catch(
				err => {
					dispatch('loaderModule/hideLoader', null, { root: true })
					if (err.response.status === 500) {
						const alert = {
							message: "Something went wrong. Please try again later."
						}
						sessionStorage.clear();
						dispatch('alertModule/showFailure', alert, { root: true });
					} else {
						const alert = {
							message: err.response.data.respDesc
						}
						sessionStorage.clear();
						dispatch('alertModule/showFailure', alert, { root: true });
					}
				}
			);
	}
};

const mutations = {
	loginRequest(state, user) {
		state.status = { loggedIn: true};
		state.user = user;
	},
	loginSuccess(state, user) {
		state.status = { loggedIn: true};
		state.user = user;
	},
	loginFailure(state) {
		state.status = {};
		state.user = null;
	},
	logout(state) {
		state.status = {};
		state.user = null;
	}
};

const getters = {
	getUser: state => state
}

export const loginModule = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
};