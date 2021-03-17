<template>
  <div class="game-reference">
    <vue-custom-scrollbar class="guns-list" v-bind:settings="settings">
      <ReferenceGun v-for="gun of guns" v-bind:gun="gun" v-bind:key="gun.id" />
    </vue-custom-scrollbar>
  </div>
</template>
<script>
import ReferenceGun from './ReferenceGun';
import { mapState } from 'vuex';
import vueCustomScrollbar from 'vue-custom-scrollbar';
import 'vue-custom-scrollbar/dist/vueScrollbar.css';
export default {
  name: 'GameReference',
  computed: {
    ...mapState('gunsData', ['guns']),
  },
  data() {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false,
        wheelSpeed: 0.3,
      },
    };
  },
  components: {
    ReferenceGun,
    vueCustomScrollbar,
  },
};
</script>

<style scoped lang="scss">
.game-reference {
  width: calc(100% + 4rem);
  margin-left: -2rem;
}
.guns-list {
  height: 29rem;
  overflow: visible;
  overflow-y: scroll;
  padding: 0 2rem;
}
</style>
<style lang="scss">
.guns-list {
  .ps__rail-y {
    width: 0.3rem !important;
    background: transparent !important;
    .ps__thumb-y {
      width: 0.3rem !important;
    }
    &:hover,
    &:focus {
      background: transparent !important;
      width: 0.3rem !important;
      cursor: pointer !important;
      .ps__thumb-y {
        width: 0.3rem !important;
      }
    }
  }
}
</style>
