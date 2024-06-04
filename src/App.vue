<template>
  <TheNavbar :types="types"></TheNavbar>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheNavbar from './components/layouts/TheNavbar.vue';

export default {
  name: 'App',
  data() {
    return {
      types: ['Landscape', 'Engineering', 'Architecture', 'Planning']
    } 
  },
  components: {
    HelloWorld,
    TheNavbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
