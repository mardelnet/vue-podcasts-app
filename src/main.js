import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia'; // import Pinia
import Podcasts from './components/Podcasts.vue';
import Home from './components/Home.vue';
import App from './App.vue';
import './assets/sass/style.scss';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/podcasts/:id', component: Podcasts, name: 'podcasts' },
  ],
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
