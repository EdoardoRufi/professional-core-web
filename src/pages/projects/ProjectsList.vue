<template>
    <stored-projects></stored-projects>
    <!-- TODO: add the project detail, that must be shown in front of the list-->
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
    StoredProjects
  }
}
</script>
