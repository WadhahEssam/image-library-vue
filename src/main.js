import  Vue from 'vue';
import App  from './App';
import store from './store'; // index is automatically imported

new Vue({
  render:  h => h(App),
  store // this is how to connect the store
}).$mount('#app');