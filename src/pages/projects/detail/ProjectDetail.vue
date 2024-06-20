<template>
  <div class="project-detail">
    <!-- Main Image -->
    <p>blabla {{ id }}</p>
    <!-- Horizontal List of Detail Images -->
    <div class="details-container">
      <ul class="horizontal-list">
        <!--TODO: uncomment TheProject and try to make it work!-->
        <!--<li>
          <TheProject :id="id" :isMain="true" />
        </li>-->
        <!--<li v-for="detail in projectDetails" :key="detail.order">
          <TheProject
            :id="id"
            :isMain="false"
            :order="detail.order"
          />
        </li>-->
      </ul>
    </div> 
  </div>
</template>
  
<script>
//import TheProject from '../TheProject.vue';

export default {
  props: ['id'],
  computed: {
    projectDetails() {
      const project = this.$store.getters['projects/projects'].find(project => project.id === parseInt(this.id));
      console.log(project.details);
      return project ? project.details : [];
    }
  },
  components: {
   //TheProject,
  }
};
</script>

<style scoped>
.project-detail {
  display: flex;
  flex-direction: column;
}

.details-container {
  overflow-x: auto;
  white-space: nowrap;
  padding: 1rem 0;
}

.horizontal-list {
  display: inline-flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.horizontal-list li {
  margin-right: 1rem;
}
</style>
