<template>
    <ul>
      <the-project
        v-for="pro in projects"
        :key="pro.id"
        :id="pro.id"
        :isMain="true"
        @project-selected="handleProjectSelected" ></the-project>
    </ul>
  </template>
  
  <script>
  import TheProject from './TheProject.vue';
  
  export default {
    computed: {
      projects() {
        return this.$store.getters['projects/projects']
      },
    
  },
    methods: {
      handleProjectSelected(id) {
        this.$emit('project-selected', id);
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