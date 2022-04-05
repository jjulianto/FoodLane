import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const cartState = createPersistedState({
    paths: ['cart']
})

import home from './module/home'
import menu from './module/menu'
import cart from './module/cart'

export default createStore({
    modules: {
        home,
        menu,
        cart,
    },
    plugins: [cartState]
})