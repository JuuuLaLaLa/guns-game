<template>
  <div class="button-exit">
    <a class="button-exit__icon" v-on:mousedown.prevent.stop="exitClick"></a>
  </div>
</template>

<script>
export default {
  name: "ButtonExit",
  methods: {
    exitClick() {
      let audio = new Audio();
      audio.src = "/media/buttons.mp3";
      audio.autoplay = true;
    },
  },
};
</script>

<style scoped lang="scss">
.button-exit {
  z-index: 10;
  width: 4.8rem;
  height: 4.8rem;
  background: url("../assets/img/btn-ellipse.png");
  background-size: contain;
  padding: 0.7rem;
  float: left;

  &__icon {
    display: block;
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 3.4rem;
    background-color: #08090b;
    background-image: url("../assets/img/exit-icon.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 1.3rem 1.3rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
