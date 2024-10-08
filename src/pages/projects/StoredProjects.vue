<template>
  <div class="container">
    <ul class="list-unstyled row">
      <li class="col-12 mb-3" v-for="pro in projects" :key="pro.id">
        <the-project
          :id="pro.id"
          :isMain="true"
          @project-selected="handleProjectSelected">
        </the-project>
      </li>
    </ul>
  </div>
</template>

<script>
import TheProject from './TheProject.vue';

export default {
  computed: {
    projects() {
      return this.$store.getters['projects/projects'];
    }
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
</style>