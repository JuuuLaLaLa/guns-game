export default {
  namespaced: true,
  state: {
    profileVisibility: true, // открыто ли слева окно профиля
    helpVisibility: false, // открыта ли подсказка
    pageDisabled: false, // заблокированы ли все элементы страницы
    finalDetail: false, // флаг для обозначения, является текущая деталь финальной
    animationActive: false // запущена ли фоновая анимация
  },
  getters: {
  },
  mutations: {
    setProfileVisibility(state, val) {
      state.profileVisibility = val;
    },
    setHelpVisibility(state, val) {
      state.helpVisibility = val;
    },
    setPageDisabled(state, val) {
      state.pageDisabled = val;
    },
    setFinalDetail(state, val) {
      state.finalDetail = val;
    },
    setAnimationActive(state, val) {
      state.animationActive = val;
    }
  },
  actions: {
    async updateProfileVisibility(ctx, val) {
      ctx.commit('setProfileVisibility', val)
    },
    async updateHelpVisibility(ctx, val) {
      ctx.commit('setHelpVisibility', val)
    },
    async updatePageDisabled(ctx, val) {
      ctx.commit('setPageDisabled', val)
    },
    async updateFinalDetail(ctx, val) {
      ctx.commit('setFinalDetail', val)
    },
    async updateAnimationActive(ctx, val) {
      ctx.commit('setAnimationActive', val)
    },
  }
}