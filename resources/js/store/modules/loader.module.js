const state = {
	show: false
};

const actions = {
	showLoader({ commit }) {
		commit('toggleLoader', true);
	},
	hideLoader({ commit }) {
		commit('toggleLoader', false);
	}
};

const mutations = {
	toggleLoader(state, status) {
		state.show = status;
	}
};

export const loaderModule = {
	namespaced: true,
	state,
	actions,
	mutations 
};