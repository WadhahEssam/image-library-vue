import  Vue from 'vue';
import VueRouter from 'vue-router'
import App  from './App';
import AuthHandler from './components/AuthHandler'
import store from './store'; // index is automatically imported

Vue.use(VueRouter);

const router = new VueRouter({
  // tells vue to use the browser router instead of the default hash router 
  mode: 'history', 
  routes: [
    {path: '/oauth2/callback', component: AuthHandler}
  ]
});

new Vue({
  store, // this is how to connect the store
  router,
  render:  h => h(App),
}).$mount('#app');


