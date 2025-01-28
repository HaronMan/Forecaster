<template>
  <Sidebar @send_onglet="handleOnglet"/>
  <section class="main">
    <Transaction v-if="onglet == 'transaction'"></Transaction>
    <p v-else>{{ onglet }}</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue';
import Transaction from './components/transaction/Transaction.vue';

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
