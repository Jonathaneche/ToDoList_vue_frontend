<template>
    <div>
        <h2>Lista de tareas</h2>
        <form @submit.prevent="agregarTarea">
            <input v-model="nuevaTarea" type="text" placeholder="Agrega una tarea">
            <button>Agregar</button>
        </form>

        <ul>
            <li v-for="tarea in tareas"
            :key="tarea.id">
                {{ tarea }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue"

import { defineProps } from 'vue';



let tareas = ref([]);
let nuevaTarea = ref("");

function agregarTarea(){
    
    const newTarea = nuevaTarea.value;

    tareas.value.push(newTarea);
    
  return tareas;

} 

defineProps({
  infoData: Object,

});

</script>

<style scoped>

</style>