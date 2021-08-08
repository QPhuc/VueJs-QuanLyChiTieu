import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/global.css'
import store from './store/index'
import diy from './diy'

const app = createApp(App);

app.provide("diy", diy);

app.use(router);
app.use(store);

app.mount('#app')
