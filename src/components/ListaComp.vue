<template>
    <h2>Lista de tareas</h2>       
            <div v-for="tarea in infoData.listaDeTareas" :key="tarea.id">
                <p>{{ tarea.titulo }}</p>
                <p>{{ tarea.descripcion}}</p>
                <p>{{ tarea.quien}}</p>
            </div>
</template>

<script setup>

import { defineProps } from 'vue';

const prop = defineProps({
    infoData: Object
})




</script>

<style scoped>

</style>
