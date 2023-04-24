<template>
    <h2 class="titulo_lista_tareas">Lista de tareas</h2>   
        <div class="contenedor_tareas">
            
            <div
                class="card_tarea"
                v-for="tarea in infoData.listaDeTareas" 
                :key="tarea.id">
                <p><strong>Titulo:</strong> {{ tarea.titulo }}</p>
                <p><strong>Descripcion:</strong> {{ tarea.descripcion}}</p>
                <p><strong>Hora:</strong> {{ tarea.hora}}</p>
                <div>
                    <!-- Button trigger modal -->
                    <button @click="editarTarea(tarea.id, tarea.titulo, tarea.descripcion, tarea.hora)" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Editar
                    </button>
                    <button @click="elimilarTarea(tarea.id)" type="button" class="btn btn-danger">Eliminar</button>
                </div>
            </div>

                

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Editar tarea</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            
                    </div>
                    <div class="modal-body">
                        <input v-model="formTitulo" type="text" placeholder="Editar titulo" required>
                            <input v-model="formDescripcion" type="text" placeholder="Editar descripcion" required>
                            <input v-model="formhora" type="text" placeholder="Editar hora " required>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button @click="actualizarBD" type="button" class="btn btn-primary">Actualizar</button>
                    </div>
                    </div>
                </div>
                </div>


            <!-- <div v-show="mostrarFormulario">
                <input v-model="formTitulo" type="text" placeholder="Editar titulo">
                <input v-model="formDescripcion" type="text" placeholder="Editar descripcion">
                <input v-model="formhora" type="text" placeholder="Editar hora ">
                <button @click="actualizarBD">Actualizar</button>
            </div> -->
        </div>


</template>

<script setup>

import { defineProps, ref } from 'vue';
import axios from "axios";

let idTarea = ref(""); 
let tituloTarea = ref("");
let descripcionTarea = ref("");
let horaTarea = ref("");
// let mostrarFormulario = ref(false);

let formTitulo = ref("");
let formDescripcion = ref("");
let formhora = ref("");


function editarTarea(id , titulo, descripcion, hora){
    idTarea.value = id;
    tituloTarea.value = titulo;
    descripcionTarea.value = descripcion;
    horaTarea.value = hora;
  
    // mostrarFormulario.value = true;

    console.log("id ***", idTarea.value);
    
}

function actualizarBD (){
    try{
        axios.put(`http://localhost:3000/tareas/${idTarea.value}`, {
            titulo: formTitulo.value,
            descripcion: formDescripcion.value,
            hora: formhora.value
        })

        if (formTitulo = "" ){
            titulo: tituloTarea.value
        };
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
