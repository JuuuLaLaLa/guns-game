<template>
  <button class="button-start" v-on:click="startGame">Начать работу</button>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'ButtonStart',
  computed: {
    ...mapState('pageState', ['profileVisibility']),
  },
  methods: {
    ...mapActions('pageState', ['updateProfileVisibility']),
    ...mapActions('gameState', ['newGame']),
    startGame() {
      this.updateProfileVisibility(false);
      this.newGame();
      let audio = new Audio();
      audio.src = "/media/buttons.mp3";
      audio.autoplay = true;
    },
  },
};
</script>

<style scoped lang="scss">
.button-start {
  width: 19.2rem;
  height: 3rem;
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  background-color: #c1e704;
  border-radius: 0.1rem;
  font-family: 'Bebas Neue Pro Expanded XBold';
  font-size: 1rem;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
}
</style>
