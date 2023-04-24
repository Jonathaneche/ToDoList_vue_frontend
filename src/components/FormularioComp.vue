<template>
  <div class="contenedor_formulario">
    <img v-if="isError" src="../assets/logo.png" alt="" />
    <div v-if="!isError">
      <h2>Lista de tareas</h2>

      <form @submit.prevent>
        <h3>Titulo - Descripcion - Hora</h3>
        <input
          v-model="formData.titulo"
          type="text"
          placeholder="Ej. Ir al banco"
        />
        <input
          v-model="formData.descripcion"
          type="text"
          placeholder="Ej. Estar en la oficina a las 8am "
        />
        <input v-model="formData.hora" type="text" placeholder="Hora" />
        <button @click="agregarTarea">Agregar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";

let formData = reactive({
  titulo: "",
  descripcion: "",
  hora: "",
});

function agregarTarea() {
  let isError = false;
  try {
    axios.post("http://localhost:3000/tareas", {
      titulo: formData.titulo,
      descripcion: formData.descripcion,
      hora: formData.hora,
    });
    location.reload();
  } catch (error) {
    isError = true;
  }
  return isError;
}
</script>

<style scoped>
.contenedor_formulario {
  width: 50vw;
  margin: 0 auto;
  align-content: center;
}

h2 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
