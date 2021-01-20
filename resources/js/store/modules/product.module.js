import { productService } from "../../service/product.service";
import router from "../../router";

const state = {
    products: [],
};

const actions = {
    add({ dispatch, commit }, userInput) {
        // commit('addRequest', userInput );
        dispatch("loaderModule/showLoader", null, { root: true });

        productService
            .add(userInput)
            .then((res) => {
                if (res.respCode === "00") {
                    commit("addSuccess", res);
                    dispatch("loaderModule/hideLoader", null, { root: true });
                    const alert = {
                        message: "Product created successfully",
                    };
                    dispatch("alertModule/showSuccess", alert, { root: true });
                    router.push("/products");
                } else {
                    commit("failure");
                    dispatch("loaderModule/hideLoader", null, { root: true });
                    const alert = {
                        message: res.respDesc,
                    };
                    dispatch("alertModule/showFailure", alert, { root: true });
                }
            })
            .catch((err) => {
                dispatch("loaderModule/hideLoader", null, { root: true });
                if (err.response.status === 500) {
                    const alert = {
                        message:
                            "Something went wrong. Please try again later.",
                    };
                    sessionStorage.clear();
                    dispatch("alertModule/showFailure", alert, { root: true });
                } else {
                    const alert = {
                        message: err.response.data.respDesc,
                    };
                    sessionStorage.clear();
                    dispatch("alertModule/showFailure", alert, { root: true });
                }
            });
    },
    edit({ dispatch, commit }, userInput) {
        // commit('addRequest', userInput );
        dispatch("loaderModule/showLoader", null, { root: true });

        productService
            .edit(userInput)
            .then((res) => {
                if (res.respCode === "00") {
                    commit("editSuccess", res);
                    dispatch("loaderModule/hideLoader", null, { root: true });
                    const alert = {
                        message: "Product successfully updated",
                    };
                    dispatch("alertModule/showSuccess", alert, { root: true });
                    router.push("/products");
                } else {
                    commit("failure");
                    dispatch("loaderModule/hideLoader", null, { root: true });
                    const alert = {
                        message: res.respDesc,
                    };
                    dispatch("alertModule/showFailure", alert, { root: true });
                }
            })
            .catch((err) => {
                dispatch("loaderModule/hideLoader", null, { root: true });
                if (err.response.status === 500) {
                    const alert = {
                        message:
                            "Something went wrong. Please try again later.",
                    };
                    sessionStorage.clear();
                    dispatch("alertModule/showFailure", alert, { root: true });
                } else {
                    const alert = {
                        message: err.response.data.respDesc,
                    };
                    sessionStorage.clear();
                    dispatch("alertModule/showFailure", alert, { root: true });
                }
            });
    },
    read({ dispatch, commit }) {
        // commit('addRequest', userInput );
        dispatch("loaderModule/showLoader", null, { root: true });

        productService
            .read()
            .then((res) => {
                if (res.respCode === "00") {
                    commit("readSuccess", res.data);
                    dispatch("loaderModule/hideLoader", null, { root: true });
                } else {
                    commit("failure");
                    dispatch("loaderModule/hideLoader", null, { root: true });
                    // const alert = {
                    // 	message: res.respDesc
                    // };
                    // dispatch('alertModule/showFailure', alert, { root: true });
                }
            })
            .catch((err) => {
                dispatch("loaderModule/hideLoader", null, { root: true });
                if (err.response.status === 500) {
                    const alert = {
                        message:
                            "Something went wrong. Please try again later.",
                    };
                    sessionStorage.clear();
                    dispatch("alertModule/showFailure", alert, { root: true });
                } else {
                    const alert = {
                        message: err.response.data.respDesc,
                    };
                    sessionStorage.clear();
                    dispatch("alertModule/showFailure", alert, { root: true });
                }
            });
    },
    remove({ dispatch, commit }, userInput) {
        // commit('addRequest', userInput );
        dispatch("loaderModule/showLoader", null, { root: true });

        productService
            .remove(userInput)
            .then((res) => {
                if (res.respCode === "00") {
                    commit("removeSuccess", res);
                    dispatch("loaderModule/hideLoader", null, { root: true });
                    const alert = {
                        message: "Product deleted successfully",
                    };
                    dispatch("alertModule/showSuccess", alert, { root: true });
                    dispatch("productModule/read", null, { root: true });
                } else {
                    commit("failure");
                    dispatch("loaderModule/hideLoader", null, { root: true });
                    const alert = {
                        message: res.respDesc,
                    };
                    dispatch("alertModule/showFailure", alert, { root: true });
                }
            })
            .catch((err) => {
                dispatch("loaderModule/hideLoader", null, { root: true });
                if (err.response.status === 500) {
                    const alert = {
                        message:
                            "Something went wrong. Please try again later.",
                    };
                    sessionStorage.clear();
                    dispatch("alertModule/showFailure", alert, { root: true });
                } else {
                    const alert = {
                        message: err.response.data.respDesc,
                    };
                    sessionStorage.clear();
                    dispatch("alertModule/showFailure", alert, { root: true });
                }
            });
    },
};

const mutations = {
    addSuccess(state, product) {},
    editSuccess(state, product) {},
    readSuccess(state, products) {
        state.products = products;
    },
    removeSuccess(state, product) {},
    failure(state) {},
};

export const productModule = {
    namespaced: true,
    state,
    actions,
    mutations,
};
