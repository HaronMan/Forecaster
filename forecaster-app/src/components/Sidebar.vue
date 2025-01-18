<template>
    <aside class="sidebar">
        <h2>Forecaster</h2>
        <nav class="onglets">
            <ul>
                <li v-for="onglet in lst_onglets"
                    :key="onglet.id">
                    <span @click="handleOnglet(onglet.id)" :class="{selected : onglet_courant == onglet.id, default: onglet_courant != onglet.id}">
                        {{ onglet.title }}
                    </span>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['send_onglet'])

const lst_onglets = ref([
    {id: 'overview', title: 'Vue d\'ensemble'},
    {id: 'transaction', title: 'Transactions'},
    {id: 'budget', title: 'Budgets'},
])

const onglet_courant = ref(lst_onglets.value[0].id)

const handleOnglet = (id) => {
    if( id != onglet_courant.value) {
        onglet_courant.value = id
        emit('send_onglet', id)
    }
}
</script>

<style scoped>
.sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: 0;
    width: 14%;
    height: 100%;
    box-shadow: 5px 0 10px rgb(128, 128, 128);
    background-color: rgb(22, 22, 22);
}

.onglets ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.default {
    transition: all .4s ease;
}

.default:hover {
    color: rgb(159, 97, 218);
    text-shadow: 0 0 2px rgb(159, 97, 218);
    cursor: pointer;
}

.selected {
    color: #007FFF;
}
</style>