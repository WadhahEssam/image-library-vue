import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import images from './modules/images';

// this is what is going to allow vuex to communicate for vue
Vue.use(Vuex);

// what is the store : collection of mdules along with thier 
// getters and actions and state
export default new Vuex.Store({
  modules: {
    auth,
    images
  },
});
