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
        REMOVE_FROM_CART(state, food) {
            state.cart = state.cart.filter(item => {
                return item.food.idMeal !== food.idMeal
            })
        },
        INCREASE_CART_QUANTITY(state, { food, quantity }) {
            let foodInCart = state.cart.find(item => {
                return item.food.idMeal === food.idMeal
            })
            foodInCart.quantity += quantity
        },
        DECREASE_CART_QUANTITY(state, { food, quantity }) {
            let foodInCart = state.cart.find(item => {
                return item.food.idMeal === food.idMeal
            })
            foodInCart.quantity -= quantity
        },
        CLEAR_CART(state) {
            state.cart = [];
        },
    },

    actions: {
        addToCart({ commit }, { food, quantity }) {
            commit('ADD_TO_CART', { food, quantity })
        },
        removeFromCart({ commit }, food) {
            commit('REMOVE_FROM_CART', food)
        },
        clearCart({ commit }) {
            commit('CLEAR_CART')
        },
        increaseCartQuantity({ commit }, { food, quantity }) {
            commit('INCREASE_CART_QUANTITY', { food, quantity })
        },
        decreaseCartQuantity({ commit }, { food, quantity }) {
            commit('DECREASE_CART_QUANTITY', { food, quantity })
        },
    },

    getters: {
        cartCount(state) {
            return state.cart.length
        },
        cartSummary(state) {
            const summaryCart = state.cart.map(food => {
                return food.quantity
            }).reduce((prev, curr) => prev + curr, 0);
            return summaryCart;
        },
    },
}

export default cart