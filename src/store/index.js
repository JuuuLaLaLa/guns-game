import Vue from 'vue';
import Vuex from 'vuex';
import pageState from './modules/pageState';
import userData from './modules/userData';
import gunsData from './modules/gunsData';
import gameState from './modules/gameState';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pageState,
    userData,
    gunsData,
    gameState,
  },
  state: {
    levelExperience: [0, 1000, 2500],
  },
  getters: {
    getLevelExperience(state) {
      return state.levelExperience;
    },
  },
  strict: true,
});
