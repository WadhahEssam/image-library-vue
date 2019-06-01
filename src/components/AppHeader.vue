<template>
  <div>
    <div class="ui secondary pointing menu">
      <a href="/" class="active item">
        Image Storage
      </a>
      <div class="right menu">
        <a href="#" @click="login" class="ui item">
          Login
        </a>
      </div>
    </div>
  </div> 
</template>

<script>
  import {mapActions} from 'vuex'; //helper function that will connect the store to this component

  export default {
    name: 'AppHeader',
    methods: {
      ...mapActions(['login']), // you don't have to specify the auth module
      // you can add other methods here
    }
    // or 
    // methods: mapActions(['login']); < if you don't want to add other methods
  }
</script>

<style>

</style>