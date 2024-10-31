import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/style.scss'
import App from './App.vue'
import router from './router/router'
const store = createPinia()
createApp(App)
.use(store)
.use(router)
.mount('#app')
