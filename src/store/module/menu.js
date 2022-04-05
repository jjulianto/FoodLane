import Api from "../../api/Api";

const menu = {
    namespaced: true,

    state: {
        foods: [],
    },

    mutations: {
        GET_FOODS(state, foods) {
            state.foods = foods;
        }
    },

    actions: {
        getFoods({ commit }, category) {
            Api.get(`/filter.php?c=${category}`)
                .then(response => {
                    commit('GET_FOODS', response.data.meals);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },

    getters: {

    }
}

export default menu