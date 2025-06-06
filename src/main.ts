import { createApp } from 'vue'
import './scrollBar.css'
import './style.css'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import axios from 'axios'
import VueAxios from 'vue-axios'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
// import 'vue-toastification/dist/index.css' 

import api from './config/api.ts'

// Global config
window.api = api
window.image_url = ''

// Create app instance
const pinia = createPinia()
const app = createApp(App)

// Use plugins
app.use(router)
app.use(VueAxios, axios)
app.use(pinia)
app.use(VueToast, { position: 'top-right' });
pinia.use(piniaPluginPersistedState)

app.mount('#app')
