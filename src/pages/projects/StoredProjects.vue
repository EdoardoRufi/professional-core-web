<template>
  <div class="container">
    <button 
      v-if="selectedFilter !== 'All'" 
      class="btn btn-secondary top-0 start-0 m-3" 
      @click="resetFilter">
      Reset Filters
    </button>
    <ul class="list-unstyled row">
      <li class="col-12 mb-3" v-for="pro in filteredProjects" :key="pro.id">
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
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      selectedFilter: 'projects/filters/selectedFilter',
    }),
    projects() {
      return this.$store.getters['projects/projects'];
    },
    filteredProjects() {
      if (this.selectedFilter === 'All') {
        return this.projects; 
      }
      return this.projects.filter(project => project.type === this.selectedFilter);
    }
  },
  methods: {
    ...mapActions('projects/filters', ['updateFilter']),
    handleProjectSelected(id) {
      this.$emit('project-selected', id);
    },
    resetFilter() {
      this.updateFilter('All');
    }
  },
  components: {
    TheProject
  }
}
</script>

<style scoped>
</style>