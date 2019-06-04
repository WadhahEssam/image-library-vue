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
    fetchImages() {
      
    }
  }
};