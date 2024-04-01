import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Podcasts from './components/Podcasts.vue'
import Home from './components/Home.vue'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/podcasts/:id', component: Podcasts, name: 'podcasts' },
    ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')