<template>
    <!-- Horizontal List of Detail Images -->
    <button class="btn btn-secondary position-absolute top-0 start-0 m-3" @click="goBack">
      ← Torna alla lista
    </button>

    <div class="overflow-x-auto py-3"><!--details-container-->
      <ul class="d-inline-flex list-unstyled mx-3">
        <the-project :id="id" :isMain="true" class="me-3"></the-project>
        <the-project v-for="detail in projectDetails" :key="detail.order" :id="id" :order="detail.order" :isMain="false" class="me-3" />
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
  methods: {
    goBack() {
      this.$router.push('/projects');//this.$router.go(-1) per tornare alla route precedente nel router history
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
