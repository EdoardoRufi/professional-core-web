<template>
    <stored-projects @project-selected="setSelectedId" :class="{'blur': selectedId}"></stored-projects>
    <div v-if="selectedId" class="detail-overlay d-flex justify-content-center align-items-center">
      <router-view></router-view>
    </div>
</template>

<script>
import StoredProjects from './StoredProjects.vue';
export default {
  
  data() {
    return {
      selectedId: null,
    }
  },
  methods: {
    setSelectedId(id){
        this.selectedId = id;
        console.log("evento emesso");
    }
  },
  components: {
    StoredProjects,
  },
  //Watcher on $route:
  //The watcher observes changes to the $route object.
  //If the new route (to) does not have a params.id, it means we are no longer on the project detail page, so selectedId is reset to null.
  watch: {
    '$route'(to) {
      if (!to.params.id) {
        this.selectedId = null;
      }
    }
  }
}
</script>

<style scoped>
.project-list-container {
  position: relative;
}

.blur {
  filter: blur(5px);
}

.detail-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 10;
}
</style>
