import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import router from './router'
import sweetalert2 from 'sweetalert2'


let app=createApp(App)
app.use(router, sweetalert2)
app.mount('#app')
