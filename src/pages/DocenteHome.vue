<template>
    <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Panel del Docente</h1>
    <DocenteSeguimiento />
    </div>
  </template>
  
  <script>
import DocenteSeguimiento from '../components/DocenteSeguimiento.vue';

  
  export default {
    name: 'DocenteHome',
    components: {
      DocenteSeguimiento
    }
  };
  </script>
  
  <style scoped>
  </style>
  