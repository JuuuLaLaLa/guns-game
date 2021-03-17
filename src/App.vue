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
    <div
      class="final-animation"
      v-bind:class="finalDetail ? 'active' : ''"
    ></div>
  </div>
</template>

<script>
import Main from './components/Main';
import ModalHelp from './components/ModalHelp';
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
    z-index: 3;
    opacity: 1;
  }
  &.transparent {
    background: #0da;
    background: transparent;
    z-index: 3;
    opacity: 1;
  }
}
.final-animation {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url('assets/img/animation-bg.png');
  z-index: -1;
  opacity: 0;
  &.active {
    z-index: 3;
    opacity: 1;
  }
}
</style>
