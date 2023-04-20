import axios from 'axios';
import { ref } from 'vue';

async function obtenerDatos(){
    let isLoading = true;
    let isError = false;

    let listaDeTareas = ref(null);

    try{

        let response = await axios.get("http://localhost:3000/tareas");
        listaDeTareas.value = await response.data;


    }catch (error){
        isError = true;
    }
    isLoading = false;

    return {isLoading, isError, listaDeTareas}

}

export default {obtenerDatos};