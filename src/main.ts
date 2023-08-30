import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "./router";
import JsonExcel from "vue-json-excel3";

import './style.css'

const pinia = createPinia()
const app = createApp(App)

app.component("downloadExcel", JsonExcel);
app.use(router)
app.use(pinia)

app.mount('#app')
