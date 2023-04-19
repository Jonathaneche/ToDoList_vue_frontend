<template>
    <h2>Lista de tareas</h2>
    <form action="">
        <input v-model="tarea" type="text" placeholder="Agrega una tarea">
        <button v-on:submit.prevent="agregarTarea">Agregar</button>
    </form>

    <ul>
        <li v-for="tarea in tareas"
        :key="tarea.id">
            {{ tarea }}
          </li>
    </ul>

   


</template>

<script setup>
import { ref } from "vue"
let tarea = ref("");
let tareas = ref(["Jonathan", "Gorka", "jaja"]);

function agregarTarea(event){
    event.preventDefault();
    const newTarea = tarea.current.value;
    tareas([...tareas, newName]);
    tareas.current.value = "";
} 



</script>

<style scoped>

</style>