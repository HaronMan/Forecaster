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
import { ref } from 'vue';

const lst_onglets = ref([
    {id: 'overview', title: 'Vue d\'ensemble'},
    {id: 'transaction', title: 'Transactions'},
    {id: 'budget', title: 'Budgets'},
])

const onglet_courant = ref(lst_onglets.value[0].id)

const handleOnglet = (id) => {
    if( id != onglet_courant.value) {
        onglet_courant.value = id
    }
}
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 15%;
    height: 100%;
    box-shadow: 5px 0 10px rgb(128, 128, 128);
    background-color: rgb(22, 22, 22);
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