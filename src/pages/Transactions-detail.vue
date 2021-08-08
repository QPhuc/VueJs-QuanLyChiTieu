<template>
    <div>
        <h3>Transactions Detail is here</h3>
        <div v-if="transaction">
        <h3>ID: {{ $route.params.id }}</h3>
        <h3>Name: {{ transaction.name }}</h3>
        <h3>Price: {{ transaction.price }}</h3>
        </div>
        <div v-else>
        <h3>Loading {{ $route.params.id }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "TransactionsDetail",
    computed: {
        transaction() {
            return this.$store.state.transaction;
        },
        transactionsFilltered() {
            return this.$store.getters.transactionsFilltered;
        }
    },
    created() {
        // fetch("http://localhost:3000/transactions/" + this.$route.params.id)
        //     .then((response) => response.json())
        //     .then((data) => (this.transaction = data));

        this.$store.dispatch("fetchTransaction", { id: this.$route.params.id})
    },
};
</script>

<style scoped>
</style>