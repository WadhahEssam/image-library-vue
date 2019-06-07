import api from '../../api/imgur';

export default {
  state: {
    images: []
  },
  getters: {
    allImages: state => {
      return state.images;
    }
  },
  mutations: {
    setImages(state, payload) {
      state.images = payload;
    }
  },
  actions: {
    async fetchImages({ rootState, commit }) {
      const images = await api.fetchImages(rootState.auth.token); // getting the state of another modoule
      commit('setImages', images.data.data);
    }, 
  }
};

