<template>
    <stored-projects></stored-projects>
    <router-view></router-view>
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
    }
  },
  components: {
    StoredProjects,
  }
}
</script>
