<template>
    <div>
        <img src="../img/isloading.gif" v-if="isLoading" alt="Gif cuando la pagina carga">
        <img src="../img/error.gif" alt="Gif si no carga la informacion">
        <div v-if="!isLoading && !isError">
            <FormularioComp :infoData="infoData"/>
            <ListaComp />
        </div>


    
    </div>
    
</template>
  
<script setup>
import FormularioComp from "@/components/FormularioComp.vue";
import ListaComp from "@/components/ListaComp.vue"

import { defineProps } from 'vue';

import {ref, onMounted} from 'vue';
import info from "../dataInfo/dataInfo.js"

let infoData = ref(onMounted(async ()=> {
    infoData.value = info.obtenerDatos();
}))

console.log(info)

defineProps({
  infoData: Object,

});
  
</script>

<style scoped>

</style>