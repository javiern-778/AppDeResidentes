import { createRouter, createWebHistory } from 'vue-router';

import AlumnoHome from '../pages/AlumnoHome.vue';
import DocenteHome from '../pages/DocenteHome.vue';
import AdminPanel from '../pages/AdminPanel.vue';
import Login from '../components/Login.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/alumno', component: AlumnoHome },
  { path: '/docente', component: DocenteHome },
  { path: '/admin', component: AdminPanel },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
