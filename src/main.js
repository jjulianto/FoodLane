import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue3-lazyload'

import "./scss/main.scss";

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueLazyLoad)

app.mount('#app')
