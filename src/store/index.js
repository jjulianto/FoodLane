import { createStore } from 'vuex'

import home from './module/home'
import menu from './module/menu'

export default createStore({
    modules: {
        home,
        menu,
    }
})