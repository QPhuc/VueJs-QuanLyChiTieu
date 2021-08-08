<template>
  <div id="nav">
    <Nav />
  </div>
  <router-view/>
</template>

<script>
import Nav from './components/Nav.vue'
import { fireStoreCore } from './configs/firebase'
export default {
  name: 'App',
  components: {
    Nav
  },
  setup() {
    async function getTransactions() {
      const response = await fireStoreCore.collection('transactions').get();
      console.log(response.docs);
      const data = response.docs.map(doc => {
        return {...doc.data(), id: doc.id }
      })
      console.log(data);
    }
    getTransactions()
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
