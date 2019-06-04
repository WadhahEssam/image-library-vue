import imgur from '../../api/imgur';
import {router} from '../../main';

export default {
  state: {
    token: window.localStorage.getItem('token'),
  },
  getters: {
    token: state => state.token,
    isLoggedIn: state => !!state.token, // returns true if token is not null
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    }
  },
  // the porpuse of the actions is to call many mutations or 
  // make an ajax request before you commit a mutation or, put
  // more complexity before you change the state
  actions: {
    // handles when the user comes back from the imgure website
    login() {
      imgur.login();
    },
    finalizeLogin({commit}, link) {
      var token = link.substring(30, 70);
      window.localStorage.setItem('token', token);
      router.push('/');
      commit('setToken', token);
    },
    logout({commit}) {
      window.localStorage.removeItem('token');
      commit('setToken', null);
    }
  }
};

// the imgure api login request 
// https://api.imgur.com/oauth2/authorize?
// client_id=YOUR_CLIENT_ID&
// response_type=REQUESTED_RESPONSE_TYPE&
// state=APPLICATION_STATE  
// the ( state ) is  a variable that the api will send back to 
// you so you can  know some info about the user