<template>
    <h1>Transaction is here...</h1>
    <div v-if="transactions.length">
        <h3>Transactions is here</h3>
        <div class="item" v-for="transaction in transactions" :key="transaction.id">
            <!-- <router-link :to="`/transactions/${transaction.id}`"> {{ transaction.name }} </router-link> -->
            <router-link 
                :to="{
                    name: 'transaction-details-route', 
                    params: { id: transaction.id},
                }"
                    >{{ transaction.name }} 
            </router-link>
            <div class="price">Price: {{ transaction.price }} </div>
        </div>
    </div>
    <div v-else>
        <h3>Loading Transaction...</h3>
    </div>
</template>

<script>
    export default {
        name: 'Transactions',
        data() {
            return {
                transactions: []
            }
        },
        created() {
            fetch("http://localhost:3000/transactions")
                .then(response => response.json())
                .then(data => this.transactions = data)
        },
    }
</script>

<style scoped>

</style>