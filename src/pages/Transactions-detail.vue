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
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
    name: "TransactionsDetail",
    setup() {
        const route = useRoute();
        const store = useStore();

        store.dispatch("fetchTransaction",{id: route.params.id})

        return {
            transaction: computed(() => store.state.transaction),
        }
    }
};
</script>

<style scoped>
</style>