import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import Login from './src/screens/TampilanAwal.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];

const router = createRouter({
    history: '/',
    routes
});

export default router;
