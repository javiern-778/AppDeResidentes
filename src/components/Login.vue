<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-semibold mb-4 text-center">Iniciar Sesión</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="block text-gray-700">Correo electrónico</label>
            <input v-model="email" type="email" class="w-full p-2 border rounded" required />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Contraseña</label>
            <input v-model="password" type="password" class="w-full p-2 border rounded" required />
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Entrar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
    if (this.email === 'admin@residencias.com' && this.password === '1234') {
      this.$router.push('/admin');
    } else {
      alert('Credenciales incorrectas');
    }
    }
  }
  };
  </script>
  
  <style scoped>
  </style>
  