<template>
    <p>{{ lst_transactions }}</p>
</template>

<script setup>
import { ref } from 'vue';

const lst_transactions = ref([
    {montant: 1800, notes: '', date: '2025-01-05'},
    {montant: -20, notes: 'Courses', date: '2025-01-15'},
    {montant: 50, notes: 'Remboursement', date: '2025-01-10'},
    {montant: -400, notes: 'Réparation auto.', date: '2025-01-18'},
])
</script>