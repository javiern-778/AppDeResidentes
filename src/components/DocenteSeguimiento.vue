<template>
    <div class="p-4">
      <h2 class="text-lg font-semibold mb-4">Seguimiento del Docente</h2>
      <div v-for="alumno in alumnos" :key="alumno.id" class="mb-4 p-4 border rounded">
        <h3 class="font-bold">{{ alumno.nombre }}</h3>
        <p>Comentarios: {{ alumno.comentario }}</p>
        <textarea v-model="alumno.comentario" class="w-full mt-2 p-2 border rounded" placeholder="Agregar comentario"></textarea>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DocenteSeguimiento',
    data() {
      return {
        alumnos: [
          { id: 1, nombre: 'Juan Pérez', comentario: '' },
          { id: 2, nombre: 'María López', comentario: '' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  