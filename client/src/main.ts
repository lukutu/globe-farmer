import { createApp } from 'vue'
import { createHead } from "@vueuse/head"
import { createPinia } from 'pinia'


const head = createHead()
import './style.css'
import App from './App.vue'

import router from "./router";
const pinia = createPinia()
const app = createApp(App);
app.use(head);
app.use(router);
app.use(pinia);
app.mount('#app')