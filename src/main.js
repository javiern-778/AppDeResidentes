import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // ✅ SOLO UNA VEZ

// Opcional: si tienes index.css, mantenlo. Si no, comenta o borra.
//import './index.css';

const app = createApp(App);
app.use(router); // ✅ Usa el router aquí
app.mount('#app');
