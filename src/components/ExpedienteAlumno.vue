<template>
    <div class="p-4">
      <h2 class="text-lg font-semibold mb-4">Expediente del Alumno</h2>
      <ul>
        <li v-for="doc in documentos" :key="doc.nombre" class="mb-2">
          <span class="font-medium">{{ doc.nombre }}:</span>
          <span>{{ doc.estado ? 'Entregado' : 'Faltante' }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExpedienteAlumno',
    data() {
      return {
        documentos: [
          { nombre: 'Solicitud', estado: false },
          { nombre: 'Carta compromiso', estado: true },
          { nombre: 'Carta de aceptación', estado: false },
          { nombre: 'Plan de trabajo', estado: true }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  