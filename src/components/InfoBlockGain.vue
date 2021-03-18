<template>
  <div class="info-block info-block-gain">
    <div class="info-block-gain__title">Общая сумма за игру:</div>
    <div class="info-block-gain__text">{{ '$ ' + userGain }}</div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'InfoBlockGain',
  computed: {
    ...mapState('userData', ['userGain']),
  }
};
</script>
<style scoped lang="scss">
.info-block-gain {
  width: 17.5rem;
  height: 7.8rem;
  position: absolute;
  top: 6.1rem;
  left: 0;
  padding: 2.2rem 0 0 4.5rem;
  background-size: contain;
  background: url('../assets/img/intersect-left.png') center center no-repeat;
  line-height: 1.15;
  text-align: left;
  &__title {
    margin-bottom: 0.5rem;
    font-family: 'Bebas Neue Pro Expanded';
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
  }
  &__text {
    font-weight: 700;
    font-size: 1.5rem;
    color: #dcff00;
  }
}
</style>
