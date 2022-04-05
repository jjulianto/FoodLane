const cart = {
    namespaced: true,

    state: {
        cart: [],
    },

    mutations: {
        ADD_TO_CART(state, { food, quantity }) {
            let foodInCart = state.cart.find(item => {
                return item.food.idMeal === food.idMeal
            })
            if (foodInCart) {
                foodInCart.quantity += quantity
                return;
            }
            state.cart.push({
                food,
                quantity
            })
        },
    },

    actions: {
        addToCart({ commit }, { food, quantity }) {
            commit('ADD_TO_CART', { food, quantity })
        },
    },

    getters: {
        cartCount(state) {
            return state.cart.length
        },
    },
}

export default cart