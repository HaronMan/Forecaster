<template>
    <aside class="sidebar">
        <h2>Forecaster</h2>
        <nav class="onglets">
            <ul>
                <li v-for="onglet in lst_onglets"
                    :key="onglet.id"
                    @click="handleOnglet(onglet.id)">
                    <img :class="{
                        img_selected : onglet_courant == 
                        onglet.id, img_default: onglet_courant != onglet.id
                    }" :src="getImgOnglet(onglet.id)" />
                    <span :class="{selected : onglet_courant == onglet.id, default: onglet_courant != onglet.id}">
                        {{ onglet.title }}
                    </span>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup>
import { ref, defineEmits, require } from 'vue';

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

const getImgOnglet = (id) => {
    return require(`@/assets/${id}.png`)
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
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.onglets ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.onglets ul li:hover {
    cursor: pointer;
}

.onglets ul li:hover .default {
    color: rgb(159, 97, 218);
    text-shadow: 0 0 2px rgb(159, 97, 218);
}

.onglets ul li:hover .img_default {
    filter: sepia(1) saturate(200%) hue-rotate(250deg) brightness(0.9);
}

.img_default, .img_selected {
    width: 15%;
    transition: all .4s ease
}

.img_default {
    filter: grayscale(90%);
}

.selected {
    color: #007FFF;
}

.default {
    transition: all .4s ease;
}

.default:hover {
    color: rgb(159, 97, 218);
    text-shadow: 0 0 2px rgb(159, 97, 218);
}
</style>