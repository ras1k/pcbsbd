import { createApp } from 'vue'
import './scrollBar.css'
import './style.css'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import axios from 'axios'
import VueAxios from 'vue-axios'

import api from './config/api.ts'
window.api = api
window.image_url = ''
const pinia = createPinia()
const app=createApp(App)
app.use(router)
app.use(VueAxios,axios)
app.use(pinia)
pinia.use(piniaPluginPersistedState)
app.mount('#app')
