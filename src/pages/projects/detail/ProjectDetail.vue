<template>
  <div class="project-detail">
    <!-- Horizontal List of Detail Images -->
    <div class="details-container">
      <ul class="horizontal-list">
        <!--TODO: uncomment TheProject and try to make it work!-->
        <the-project :id="id" :isMain="false"></the-project>
        <the-project v-for="detail in projectDetails" :key="detail.order" :id="id" :order="detail.order" :isMain="false" />
      </ul>
    </div>
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
.project-detail {
  display: flex;
  flex-direction: column;
}

.details-container {
  overflow-x: auto;
  white-space: nowrap;
  padding: 1rem 0;
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #888 #eee; /* For Firefox */
  width: 100%;
  max-width: 1400px; /* Set a larger max-width for the container */
  margin: auto;
}

/* For Webkit-based browsers (Chrome, Safari) */
.details-container::-webkit-scrollbar {
  height: 12px;
}

.details-container::-webkit-scrollbar-track {
  background: #eee;
}

.details-container::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
  border: 3px solid #eee;
}

.horizontal-list {
  display: inline-flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.horizontal-list li {
  margin-right: 1rem;
  flex: 0 0 20%; /* Adjust the width of each item */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

h3 {
  font-size: 1.0rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.25rem 0;
  /* Adjusted margin for a more compact look */
}

</style>
