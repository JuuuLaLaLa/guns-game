export default {
  namespaced: true,
  state: {
    currentGun: 1, // id текущего автомата
    currentDetail: 4, // id текущей детали
    gameProfit: 0, // общая сумма денег за игру
    gameProgress: [0, 0, 0, 0], // результаты игры
    gameProgressNum: 0, // результат сборки автомата в %
    gameBonus: 0, // бонус за скорость
    gameFinish: 0, // флаг для скрытия элементов и отображения анимации для собранного автомата
    dateTime: 0, // время последнего действия для расчёта коэффициента
  },
  getters: {},
  mutations: {
    resetGame(state, newGun) {
      state.currentGun = newGun;
      state.gameBonus = 0;
    },
    setGameBonus(state, newBonus) {
      state.gameBonus = newBonus;
    },
    setGameProgress(state, payload) {
      state.gameProgress.splice(payload.index, 1, 1);

      state.gameProgressNum = payload.progressNum;
    },
    setCurrentDetail(state, detailNum) {
      state.currentDetail = detailNum;
    },
    refreshDateTime(state) {
      state.dateTime = Date.now();
    },
  },
  actions: {
    async newGame(ctx) {
      let min = Math.ceil(1);
      let max = Math.floor(9);
      let progressNum = 0;
      let progress;
      let currentDetail;
      let newGun;
      let userLevel = ctx.rootState.userData.userLevel;
      do {
        newGun = Math.floor(Math.random() * (max - min)) + min;
      } while (newGun == ctx.state.currentGun);

      if (userLevel == 1) {
        currentDetail = 3;
        progress = [1, 1, 0, 0];
      } else if (userLevel == 2) {
        currentDetail = 2;
        progress = [1, 0, 0, 0];
      } else if (userLevel == 3) {
        currentDetail = 1;
        progress = [0, 0, 0, 0]
      }
      ctx.commit('refreshDateTime');
      ctx.commit('setCurrentDetail', currentDetail);
      ctx.commit('setGameProgress', {progress, progressNum});
      ctx.commit('resetGame', newGun);
    },
    async updateGameBonus(ctx, newBonus) {
      ctx.commit('setGameBonus', newBonus);
    },
    async updateGameProgress(ctx, index) {
      let userLevel = ctx.rootState.userData.userLevel;
      let progressNum = ctx.state.gameProgressNum;
      progressNum = progressNum + 100 / (userLevel + 1);
      ctx.commit('setGameProgress', {index, progressNum});
    },
    async updateCurrentDetail(ctx) {
      let nextDetail = ctx.state.currentDetail + 1;
      ctx.commit('refreshDateTime');
      if (nextDetail > 4) {
        ctx.dispatch('newGame');
      } else {
        ctx.commit('setCurrentDetail', nextDetail);
      }
    },
  },
};
