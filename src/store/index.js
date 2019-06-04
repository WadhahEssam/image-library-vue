import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';

// this is what is going to allow vuex to communicate for vue
Vue.use(Vuex);

// what is the store : collection of mdules along with thier 
// getters and actions and state
export default new Vuex.Store({
  modules: {
    auth
  },
});
