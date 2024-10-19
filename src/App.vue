<template>
  <div id="app">
    <NavigationMenu /> <!-- Navigation menu is used here -->
    <router-view /> <!-- Displays the components based on the current route -->
  </div>
</template>

<script>
import NavigationMenu from './components/Navigation.vue'; // Import Navigation component

export default {
  name: 'App',
  components: {
    NavigationMenu, // Register the NavigationMenu component
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color: #42b983;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}
</style>
