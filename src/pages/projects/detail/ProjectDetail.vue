<template>
    <h1 :id="id">Papapap{{ id }}</h1>
</template>
  
<script>
  export default {
    props: ['id']
  }
</script>

<style scoped>
h1 {
  color: black;
}
</style>
  
