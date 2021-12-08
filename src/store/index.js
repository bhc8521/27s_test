import { createStore } from "vuex";

const state = () => ({
  theme: "black",
});

const mutations = {
  setTheme(state, value) {
    state.theme = value;
  },
};

const store = createStore({
  state,
  mutations,
});

export default store;
