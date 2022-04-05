import Api from "../../api/Api";

const home = {
    namespaced: true,

    state: {
        categories: [],
    },

    mutations: {
        GET_CATEGORIES(state, categories) {
            state.categories = categories;
        }
    },

    actions: {
        getCategories({ commit }) {
            Api.get('/categories.php')
                .then(response => {
                    commit('GET_CATEGORIES', response.data.categories);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },

    getters: {

    }
}

export default home