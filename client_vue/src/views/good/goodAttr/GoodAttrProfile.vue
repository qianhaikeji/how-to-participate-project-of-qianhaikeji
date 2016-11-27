<template>
  <div class="good-attr-profile">
    good-attr-profile
    {{ $route.params.tid }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.good-attr-profile {
  color: #42b983;
}
</style>
