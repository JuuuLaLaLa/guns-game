export default {
  namespaced: true,
  state: {
    userName: '',
    userExperience: 0,
    userLevel: 1, // рассчитывается в зависимости от опыта и игровых опций
    userProgress: 0, // прогресс до следующего уровна (%)
    userGain: 0,
  },
  getters: {},
  mutations: {
    updateUserExperience(state, experience) {
      state.userExperience = experience;
    },
    updateUserLevel(state, level) {
      state.userLevel = level;
    },
    updateUserProgress(state, progress) {
      state.userProgress = progress;
    },
    updateUserGain(state, gain) {
      state.userGain = gain;
    },
  },
  actions: {
    async fetchUserData(ctx) {
      let experience = 2000; // нужно подгружать
      let gain = 2000000; //нужно подгрузить
      let levelExperience = ctx.rootState.levelExperience;
      let progress = 0;
      let level = 0;
      if (experience < levelExperience[1]) {
        level = 1;
      } else if (
        experience >= levelExperience[1] &&
        experience < levelExperience[2]
      ) {
        level = 2;
      } else {
        level = 3;
      }
      if (level == 3) {
        progress = 100;
      } else {
        let nextLevelExperience = levelExperience[level];
        let prevLevelExperience = levelExperience[level - 1];
        progress =
          100 -
          ((nextLevelExperience - experience) * 100) /
            (nextLevelExperience - prevLevelExperience);
        progress = Math.round(progress);
      }
      ctx.commit('updateUserExperience', experience);
      ctx.commit('updateUserGain', gain);
      ctx.commit('updateUserLevel', level);
      ctx.commit('updateUserProgress', progress);
    },
  },
};
