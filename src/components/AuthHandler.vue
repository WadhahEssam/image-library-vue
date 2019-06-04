<template>
  <div>
    <h1>Please Wait</h1>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';  

  export default {
    name: 'AuthHandler',
    created() {
      this.finalizeLogin(this.$route.fullPath);
    },
    methods: {
      ...mapActions(['finalizeLogin']),
    }
  }
</script>

<style lang="scss" scoped>

</style>