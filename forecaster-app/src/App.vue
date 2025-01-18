<template>
  <Sidebar @send_onglet="handleOnglet"/>
  <section class="main">
    <img alt="Vue logo" src="./assets/logo_dark.png">
    <p>{{ onglet }}</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue';

const onglet = ref('overview')

const handleOnglet = (tab)  => { 
  onglet.value = tab 
}
</script>

<style scoped>
.main {
  margin: 1%;
  margin-left: 15%;
}
</style>
