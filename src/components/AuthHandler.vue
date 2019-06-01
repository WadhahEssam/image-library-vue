<template>
  <div>
    <h1>Please Wait</h1>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';  

  export default {
    name: 'AuthHandler',
    created() {
      this.finalizeLogin('this is the token');
    },
    computed: {
      ...mapActions(['finalizeLogin']),
    }
  }
</script>

<style lang="scss" scoped>

</style>