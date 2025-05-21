<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Bienvenido, Alumno</h1>
      <ExpedienteAlumno />
      <InfoResidencia />
    </div>
  </template>
  
  <script>
import ExpedienteAlumno from '../components/ExpedienteAlumno.vue';
import InfoResidencia from '../components/InfoResidencia.vue';

  export default {
    name: 'AlumnoHome',
    components: {
      ExpedienteAlumno,
      InfoResidencia
    }
  };
  </script>
  
  <style scoped>
  </style>
  