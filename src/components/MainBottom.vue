<template>
  <div class="main__bottom">
    <div class="game-details">
      <GameDetail
        v-for="gunNum of getRandomGuns(currentGun)"
        v-bind:key="gunNum"
        v-bind:gunNum="gunNum"
        v-bind:currentDetail="currentDetail"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import GameDetail from './GameDetail';
export default {
  name: 'MainBottom',
  computed: {
    ...mapState('gameState', ['currentGun', 'currentDetail']),
    ...mapGetters('gunsData', ['getRandomGuns']),
  },
  components: {
    GameDetail,
  },
};
</script>

<style scoped lang="scss">
.game-details {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  padding-bottom: 3.1rem;
}
</style>
