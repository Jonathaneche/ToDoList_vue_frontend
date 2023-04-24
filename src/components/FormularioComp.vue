<template>
    <div>
        <img v-if="isError" src="../assets/logo.png" alt="">
        <div v-if="!isError">
                <h2>Lista de tareas</h2>
                <form @submit.prevent>
                    <input v-model="formData.titulo" type="text" placeholder="Ej. Ir al banco">
                    <input v-model="formData.descripcion" type="text" placeholder="Ej. Estar en la oficina a las 8am ">
                    <input v-model="formData.quien" type="text" placeholder="Hora">
                </form>
            <button @click="agregarTarea">Agregar</button>
        </div> 

    </div>
</template>

<script setup>
import {reactive} from "vue"
import axios from "axios"

let formData = reactive({
    "titulo": "",
    "descripcion": "",
    "quien":""
})


function agregarTarea(){
    let isError = false;
    try{
        axios.post("http://localhost:3000/tareas", {
            titulo: formData.titulo,
            descripcion: formData.descripcion,
            quien: formData.quien
        })
        location.reload()
    }catch (error){   
        isError = true;
    }
    return isError
}

</script>

<style scoped>

</style>