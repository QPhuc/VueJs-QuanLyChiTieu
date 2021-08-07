<template>
    <div>
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
</template>

<script>
    export default {
        name: 'Transactions',
        data() {
            return {
                transactions: [
                    {
                        id: 1,
                        name: 'Đi siêu thị',
                        price: 1000
                    },
                    {
                        id: 2,
                        name: 'Mua gạo',
                        price: 2000
                    },
                    {
                        id: 3,
                        name: 'Thanh toán tiền điện',
                        price: 3000
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>