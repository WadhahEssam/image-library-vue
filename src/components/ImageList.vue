<template>
  <div>
    Image List
    <div class="images" v-for="image in allImages">
      <img v-bind:src="image.link" alt="">
    </div>
    {{ allImages.length }}
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

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
    computed: {
      ...mapGetters([
        'allImages',
      ])
    },
  }
</script>

<style lang="scss" scoped>

</style>