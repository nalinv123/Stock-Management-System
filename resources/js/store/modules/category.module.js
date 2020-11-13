import { categoryService } from "../../service/category.service";
import router from "../../router";

const state = {
	categories: []
};

const actions = {
	add({ dispatch, commit }, userInput) {
		// commit('addRequest', userInput );
		dispatch('loaderModule/showLoader', null, { root: true });

		categoryService.add(userInput)
			.then(
				res => {
					if (res.respCode === '00') {
						commit('addSuccess', res);
						dispatch('loaderModule/hideLoader', null, { root: true });
						const alert = {
							message: "Category created successfully"
						}
						dispatch('alertModule/showSuccess', alert, { root: true });
						router.push('/category');
					} else {
						commit('failure');
						dispatch('loaderModule/hideLoader', null, { root: true });
						const alert = {
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
			);
	},
	edit({ dispatch, commit }, userInput) {
		// commit('addRequest', userInput );
		dispatch('loaderModule/showLoader', null, { root: true });

		categoryService.edit(userInput)
			.then(
				res => {
					if (res.respCode === '00') {
						commit('editSuccess', res);
						dispatch('loaderModule/hideLoader', null, { root: true });
						const alert = {
							message: "Category successfully updated"
						};
						dispatch('alertModule/showSuccess', alert, { root: true });
						router.push('/category');
					} else {
						commit('failure');
						dispatch('loaderModule/hideLoader', null, { root: true });
						const alert = {
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
			);
	},
	read({ dispatch, commit }) {
		// commit('addRequest', userInput );
		dispatch('loaderModule/showLoader', null, { root: true });

		categoryService.read()
			.then(
				res => {
					if (res.respCode === '00') {
						commit('readSuccess', res.data);
						dispatch('loaderModule/hideLoader', null, { root: true });
					} else {
						commit('failure');
						dispatch('loaderModule/hideLoader', null, { root: true });
						// const alert = {
						// 	message: res.respDesc
						// };
						// dispatch('alertModule/showFailure', alert, { root: true });
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
	remove({ dispatch, commit }, userInput) {
		// commit('addRequest', userInput );
		dispatch('loaderModule/showLoader', null, { root: true });

		categoryService.remove(userInput)
			.then(
				res => {
					if (res.respCode === '00') {
						commit('removeSuccess', res);
						dispatch('loaderModule/hideLoader', null, { root: true });
						const alert = {
							message: "Category deleted successfully"
						}
						dispatch('alertModule/showSuccess', alert, { root: true });
						dispatch('categoryModule/read', null, { root: true });
					} else {
						commit('failure');
						dispatch('loaderModule/hideLoader', null, { root: true });
						const alert = {
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
			);
	},
};

const mutations = {
	addSuccess(state, category) {

	},
	editSuccess(state, category) {

	},
	readSuccess(state, category) {
		state.categories = category;
	},
	removeSuccess(state, category) {

	},
	failure(state) {

	}
};

export const categoryModule = {
	namespaced: true,
	state,
	actions,
	mutations
}