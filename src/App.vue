<template>
  <TheNavbar :types="types"></TheNavbar>
  <the-projects :projects="projects">prova</the-projects>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->

</template>

<script>
import TheNavbar from './components/layouts/TheNavbar.vue';
import TheProjects from './components/projects/TheProjects.vue';

export default {
  name: 'App',
  data() {
    return {
      types: ['Landscape', 'Engineering', 'Architecture', 'Planning'],
    }
  },
  components: {
    TheNavbar,
    TheProjects
  }
}
</script>

<style>
#app {
  /* Define the font family for the text within the #app element */
  font-family: Avenir, Helvetica, Arial, sans-serif;

  /* Improve text readability by smoothing the font edges on WebKit-based browsers */
  -webkit-font-smoothing: antialiased;

  /* Improve text readability by using grayscale antialiasing on Firefox for macOS */
  -moz-osx-font-smoothing: grayscale;

  /* Set the text color to a specific dark grey/blue shade */
  /*color: #2c3e50;*/

  /* Add a 100px margin at the top of the #app element to create space above it */
  margin-top: 100px;
}
</style>
