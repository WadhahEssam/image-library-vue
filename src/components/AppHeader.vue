<template>
  <div>
    <div class="ui secondary pointing menu">
      <a href="/" class="active item">
        Image Storage
      </a>
      <div class="right menu">
        <div v-if="isLoggedIn" class="inline">
          <router-link to="/gallery"  class="ui item">
            Gallery
          </router-link>
          <router-link to="/upload" class="ui item">
            Upload
          </router-link>
          <a @click="logout" class="ui item reddish">
            Logout
          </a>
        </div>
        <a v-if="!isLoggedIn" @click="login" class="ui item">
          Login
        </a>
      </div>
    </div>
  </div> 
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'; //helper function that will connect the store to this component

  export default {
    name: 'AppHeader',    
    computed: {
      ...mapGetters(['isLoggedIn',])
    },
    methods: {
      ...mapActions(['login', 'logout']), // you don't have to specify the auth module
      // you can add other methods here
    }
    // or 
    // methods: mapActions(['login']); < if you don't want to add other methods
  }
</script>

<style lang="sass">
  .reddish
    color: #a96666 !important
  .inline
    display: contents
  
</style>