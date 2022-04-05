import { createStore } from 'vuex'

import home from './module/home'

export default createStore({
    modules: {
        home,
    }
})