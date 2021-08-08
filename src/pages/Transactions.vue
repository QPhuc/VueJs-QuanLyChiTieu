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
    <div v-else-if="error">
        {{error}}
    </div>
    <div v-else>
        <h3>Loading Transaction...</h3>
    </div>
</template>

<script>
// import useTransaction from '../uses/fetchTransaction'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'Transactions',
    setup() {
        // const { transactions, error, fetchAll } = useTransaction()
        // fetchAll();

        const store = useStore();

        store.dispatch("fetchAllTransactions");

        const transactions = computed(() => store.state.transactions)
        const error = computed(() => store.state.error)

        return {
            transactions,
            error
        }
    }
}
</script>

<style scoped>

</style>