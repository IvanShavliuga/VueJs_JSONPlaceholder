<template>
  <div id="apps">
    <button>
      <router-link to="/">Home</router-link>
    </button>
    <button>
      <router-link to="/about">About</router-link>
    </button>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  color: #42b983;
}
</style>
