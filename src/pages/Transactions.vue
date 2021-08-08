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
        {{error.message}}
    </div>
    <div v-else>
        <h3>Loading Transaction...</h3>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Transactions',
    // data() {
    //     return {
    //         transactions: []
    //     }
    // },
    // created() {
    //     fetch("http://localhost:3000/transactions")
    //         .then(response => response.json())
    //         .then(data => this.transactions = data)
    // },
    setup() {
        const transactions = ref([]);
        const error = ref(null);

        const fetchAll = async () => {
            const response = await fetch("http://localhost:3000/transactions");
            try {
                if (!response.ok) throw new Error("Some thing went wrong.")
                
                transactions.value = await response.json();
            } catch (err) {
                error.value = err;
                console.log(error.value);
            }
            
        }
        fetchAll()

        return {
            transactions,
            error
        }
    }
}
</script>

<style scoped>

</style>