<template>
    <div>
        <img src="../img/isloading.gif" v-if="infoData.isLoading" alt="Gif cuando la pagina carga">
        <img v-if="infoData.isError" src="../img/error.gif" alt="Gif si no carga la informacion">
        <div v-if="!infoData.isLoading && !infoData.isError">
            <FormularioComp />
            <ListaComp :infoData="infoData" />
        </div>


    
    </div>
    
</template>
  
<script setup>
import FormularioComp from "@/components/FormularioComp.vue";
import ListaComp from "@/components/ListaComp.vue"

import {ref, onMounted} from 'vue';
import info from "../dataInfo/dataInfo.js"

let infoData = ref(onMounted(async () => {
    infoData.value = await info.obtenerDatos();
}))

console.log("**", infoData)

  
</script>

<style scoped>

</style>