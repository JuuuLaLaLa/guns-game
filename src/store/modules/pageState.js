export default {
  namespaced: true,
  state: {
    profileVisibility: true,
    helpVisibility: false,
    pageDisabled: false,
    finalDetail: false,
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
  }
}