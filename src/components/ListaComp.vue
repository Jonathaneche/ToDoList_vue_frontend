<template>
    <h2 class="titulo_lista_tareas">Lista de tareas</h2>   
        <div class="contenedor_tareas">
            
            <div
                class="card_tarea"
                v-for="tarea in infoData.listaDeTareas" 
                :key="tarea.id">
                <p><strong>Titulo:</strong> {{ tarea.titulo }}</p>
                <p><strong>Descripcion:</strong> {{ tarea.descripcion}}</p>
                <p><strong>Hora:</strong> {{ tarea.quien}}</p>
                <div>
                    <button @click="editarTarea(tarea.id, tarea.quien)">Editar</button>
                    <button @click="elimilarTarea(tarea.id)">Eliminar</button>
                </div>
            </div>
            <div v-show="mostrarFormulario">
                <input v-model="formTitulo" type="text" placeholder="Ej. Ir al banco">
                <input v-model="formDescripcion" type="text" placeholder="Ej. Estar en la oficina a las 8am ">
                <button @click="actualizarBD">Actualizar</button>
            </div>
        </div>


</template>

<script setup>

import { defineProps, ref } from 'vue';
import axios from "axios";

let idTarea = ref(""); 
let quienTarea = ref("");
let mostrarFormulario = ref(false);

let formTitulo = ref("");
let formDescripcion = ref("");


function editarTarea(id, quien){
    idTarea.value = id;
    quienTarea.value = quien;
    mostrarFormulario.value = true;

    console.log("id ***", idTarea.value);
    console.log("Quien ***", quienTarea.value);
}

function actualizarBD (){
    try{
        axios.put(`http://localhost:3000/tareas/${idTarea.value}`, {
            titulo: formTitulo.value,
            descripcion: formDescripcion.value,
            quien: quienTarea.value
        })
        location.reload()

    }catch(error){
        console.log(error);
    }
}

function elimilarTarea(id){
    try{

        axios.delete(`http://localhost:3000/tareas/${id}`)
        location.reload()
    }catch(error){
        console.log(error);
    }
}


defineProps({
    infoData: Object
})

</script>

<style scoped>
    .titulo_lista_tareas {
        text-align: center;
    }
    .contenedor_tareas{
        background-color: cadetblue;
        width: 90vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 1rem;
        gap: 1.5rem;

    }

    .card_tarea{
        background-color: bisque;
        padding: 1rem;
        
    }
</style>
