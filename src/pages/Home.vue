<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>This is an Home page</h1>
    <input type="text" v-model="searchText">
    <ul>
      <li v-for="(customer, index) in customersFilled" :key="index">
        {{ customer }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue';
export default {
  name: 'Home',
  setup() {
    const searchText = ref("");
    const customers = reactive (["SomeThing", "Phuc Tran", "Quang Phuc"])
    const customersFilled = computed(() => 
      customers
      .map(customer => {
        customer = customer.toLowerCase();
        return customer;
      })
      .filter(customer => customer.includes(searchText.value.toLowerCase()))
    )

    watch(searchText, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    })

    watchEffect(() => {
      if (searchText.value) {
        console.log("run again!");
      }
    })

    return {
      searchText,
      customersFilled,
    }
  },
  components: {
    
  }
}
</script>
