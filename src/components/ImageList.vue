<template>
  <div>
    Image List
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'ImageList',    
    created() {
      this.fetchImages();
    },
    methods: {
      ...mapActions([
        'fetchImages', //also supports payload `this.nameOfAction(amount)` 
      ])
    },
  }
</script>

<style lang="scss" scoped>

</style>