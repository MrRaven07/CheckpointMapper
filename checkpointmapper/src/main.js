import { createApp } from 'vue'
import App from './App.vue'
import './shared.css'
import router from './router/rout1.js'

const app = createApp(App)
app.use(router)
app.mount('#app')



