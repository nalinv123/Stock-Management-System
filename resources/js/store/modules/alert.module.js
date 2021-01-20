const state = {
    alert: {
        status: false,
        title: "",
        message: "",
    },
};

const actions = {
    showSuccess({ commit }, alert) {
        commit("showSuccess", alert);
    },
    showFailure({ commit }, alert) {
        commit("showFailure", alert);
    },
    hideAlert({ commit }) {
        commit("hideAlert");
    },
};

const mutations = {
    showSuccess(state, alert) {
        state.alert.status = true;
        state.alert.title = "Success";
        state.alert.message = alert.message;
    },
    showFailure(state, alert) {
        state.alert.status = true;
        state.alert.title = "Failure";
        state.alert.message = alert.message;
    },
    hideAlert(state) {
        state.alert.status = false;
        state.alert.title = "";
        state.alert.message = "";
    },
};

export const alertModule = {
    namespaced: true,
    state,
    actions,
    mutations,
};
