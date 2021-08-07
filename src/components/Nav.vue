<template>
    <nav class="nav">
        <router-link to="/">Overview</router-link>
        <router-link :to="{ name: 'transaction-route'}">Transactions</router-link>
        <router-link to="/">Buggets</router-link>
        <router-link to="/">Reports</router-link>
        <router-link to="/">Setting</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'Nav',
    }
</script>

<style scoped>

</style>