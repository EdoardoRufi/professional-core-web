<template>
    <!-- Horizontal List of Detail Images -->
    <div class="overflow-x-auto py-3"><!--details-container-->
      <ul class="d-inline-flex list-unstyled mx-3">
        <the-project :id="id" :isMain="true"></the-project>
        <the-project v-for="detail in projectDetails" :key="detail.order" :id="id" :order="detail.order" :isMain="false" />
      </ul>
    </div>
</template>

<script>
import TheProject from '../TheProject.vue';

export default {
  props: ['id'],
  computed: {
    projectDetails() {
      const project = this.$store.getters['projects/projects'].find(project => project.id === parseInt(this.id));
      console.log("id: " + this.id + " details " + project.details[0] + "project:" + project[0]);
      return project ? project.details : [];
    }
  },
  components: {
    TheProject
  }
};
</script>

<style scoped>

/*.details-container {
  /*overflow-x: auto;
  /*width: 100%;*/
  /*max-width: 1400px; /* Set a larger max-width for the container */
/*}*/

</style>
