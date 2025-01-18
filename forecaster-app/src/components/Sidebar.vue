<template>
    <aside class="sidebar">
        <h2>Forecaster</h2>
        <nav class="onglets">
            <ul>
                <li><span>Vue d'ensemble</span></li>
                <li><span>Transactions</span></li>
                <li><span>Budgets</span></li>
            </ul>
        </nav>
    </aside>
</template>

<script setup>

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

.onglets ul li span {
    transition: all .4s ease;
}

.onglets ul li span:hover {
    color: rgb(159, 97, 218);
    text-shadow: 0 0 2px rgb(159, 97, 218);
    cursor: pointer;
}
</style>