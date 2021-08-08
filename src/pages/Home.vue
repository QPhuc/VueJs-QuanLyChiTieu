<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>This is an Home page</h1>
    <button @click="diy.setCount">Show</button>
  </div>
</template>

<script>
// import { ref, reactive, computed, watch, watchEffect } from 'vue';
export default {
  name: 'Home',
  inject: ["diy"],
  created() {

  },
}
</script>
