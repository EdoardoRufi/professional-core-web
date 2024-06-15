<template>
    <ul>
      <the-project
        v-for="pro in projects"
        :key="pro.id"
        :id="pro.id"
        :projectName="pro.projectName"
        :location="pro.location"
        :nation="pro.nation"
        :startDate="pro.startDate"
        :size="pro.size"
        :sizeUnit="pro.sizeUnit"
        :imageUrl="pro.imageUrl"
      ></the-project>
    </ul>
  </template>
  
  <script>
  import TheProject from './TheProject.vue';
  
  export default {
    computed: {
      projects() {
        return this.$store.getters['projects/projects']
      }
  },
    components: {
        TheProject
    }
  }
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
  }
  </style>