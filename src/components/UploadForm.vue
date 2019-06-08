<template>
  <div class="dropper">
    <input 
      @change="uploadImages($event.target.files)" 
      type="file"
      multiple
      accept="image/*"
    />
    <span>Drag files here!</span>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'UploadForm',
    methods: {
      ...mapActions([
        'uploadImages', //also supports payload `this.nameOfAction(amount)` 
      ])
    },
  }
</script>

<style lang="sass" scoped>
.dropper
  height: 30vh
  border: 4px dashed grey
  border-radius: 5px
  margin: 30px 0px
  display: flex
  justify-content: center
  align-items: center
  position: relative
  opacity: 0.7
  font-size: 30px
  &:hover 
    opacity: 1

input
  width: 100%
  height: 30vh
  position: absolute
  opacity: 0
</style>