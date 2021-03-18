<template>
  <div id="app">
    <Main />
    <div
      class="modal-bg"
      v-bind:class="
        profileVisibility || helpVisibility
          ? 'active'
          : pageDisabled
          ? 'transparent'
          : ''
      "
    >
      <ModalHelp />
    </div>
    <FinalAnimation />
  </div>
</template>

<script>
import Main from './components/Main';
import ModalHelp from './components/ModalHelp';
import FinalAnimation from './components/FinalAnimation';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'app',
  computed: {
    ...mapState('pageState', [
      'profileVisibility',
      'helpVisibility',
      'pageDisabled',
      'finalDetail',
    ]),
  },
  methods: {
    ...mapActions('userData', ['fetchUserData']),
  },
  mounted() {
    this.fetchUserData();
  },
  components: {
    Main,
    ModalHelp,
    FinalAnimation,
  },
};
</script>

<style scoped lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.modal-bg {
  // display: none;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(#111, 0.7);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.2s ease;
  &.active {
    z-index: 4;
    opacity: 1;
  }
  &.transparent {
    background: #0da;
    background: transparent;
    z-index: 10;
    opacity: 1;
  }
}
</style>
