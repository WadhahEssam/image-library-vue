<template>
  <div>
    <div v-if="isLoggedIn" class="images-container" >
      <img 
        class="image" 
        v-for="image in allImages" 
        :key="image.deleteHash" 
        v-bind:src="image.link"
      >
    </div>
    <div v-else>
      <h2>You are not logged in</h2>
    </div>
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
        'allImages', 'isLoggedIn',
      ])
    },
  }
</script>

<style lang="sass" scoped>
.images-container
  column-count: 3
  column-gap: 0

.image
  max-width: 100%
  padding: 5px
</style>