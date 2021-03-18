<template>
  <div class="current-gain-wrap">
    <div class="current-gain" v-bind:class="!finalDetail ? 'active' : ''">
      <div class="current-gain__units">%</div>
      <div class="current-gain__progress-bar">
        <span v-bind:style="'width: ' + gameProgressNum + '%'">
          <span></span>
        </span>
      </div>
      <div class="bonus" v-show="gameBonus">
        <div class="bonus__value">+{{ gameBonus }}%</div>
        <div class="bonus__description">За скорость</div>
      </div>
    </div>
    <div class="gain-complete" v-bind:class="finalDetail ? 'active' : ''">
      Автомат собран
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'CurrentGain',
  computed: {
    ...mapState('gameState', ['gameBonus', 'gameProgressNum'],),
    ...mapState('pageState', ['finalDetail'],),
  },
  methods: {
    ...mapActions('gameState', ['updateBonus']),
  },
};
</script>
<style scope lang="scss">
.current-gain {
  width: 19.5rem;
  margin: 0 auto;
  z-index: -1;
  opacity: 0;
  transition: opacity .2s ease;

  &.active {
    z-index: 1;
    opacity: 1;
  }

  &__units {
    display: block;
    position: absolute;
    left: -1.5rem;
    top: -0.4rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #c1e704;
  }

  &__progress-bar {
    width: 19.5rem;
    height: 1rem;
    position: relative;
    margin: 0.4rem auto 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
    & > span {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background-color: #dcff00;
      overflow: hidden;
      transition: width 0.1s ease;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 3rem;
        background: url('../assets/img/gun-progress-bar-lighting.png') right
          center no-repeat;
        background-size: cover;
        z-index: 5;
      }
      & > span {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: linear-gradient(
          -60deg,
          rgba(0, 0, 0, 0.1) 25%,
          transparent 25%,
          transparent 50%,
          rgba(0, 0, 0, 0.1) 50%,
          rgba(0, 0, 0, 0.1) 75%,
          transparent 75%,
          transparent
        );
        z-index: 1;
        background-size: 18px 25px;
        // animation: move 2s linear infinite;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        overflow: hidden;
      }
    }
  }

  .bonus {
    position: absolute;
    top: -0.8rem;
    left: calc(100% + 1.2rem);
    min-width: 10rem;
    &__value,
    &__description {
      display: inline-block;
      line-height: 2.3rem;
    }
    &__value {
      font-size: 2rem;
      font-weight: bold;
      color: #c1e704;
      text-shadow: 0px 0px 20px rgba(#ffffff, 0.3);
      text-transform: uppercase;
    }
    &__description {
      margin-left: 0.5rem;
      font-weight: bold;
      font-size: 1rem;
      color: #fff;
      text-shadow: 0px 0px 20px rgba(#ffffff, 0.3);
    }
  }
}
.gain-complete {
  z-index: -1;
  opacity: 0;
  width: 100%;
  transition: opacity .2s ease;
  font-family: 'Bebas Neue Pro Expanded XBold';
  font-size: 2.5rem;
  color: #dcff00;
  text-align: center;
  text-transform: uppercase;
  &.active {
    z-index: 1;
    opacity: 1;
  }
}
</style>
