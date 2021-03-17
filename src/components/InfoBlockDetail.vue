<template>
  <div class="info-block-detail">
    <div class="info-block-detail__title">Выберите подходящую часть:</div>
    <div class="info-block-detail__text">{{ details[currentDetail - 1].name }}</div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'InfoBlockDetail',
  computed: {
    ...mapState('gunsData', ['details']),
    ...mapState('gameState', ['currentDetail']),
  }
};
</script>
<style lang="scss">
.info-block-detail {
  width: 17.5rem;
  height: 7.8rem;
  position: absolute;
  right: 0;
  bottom: 2rem;
  padding: 2.5rem 0 0 2rem;
  background-size: contain;
  background: url('../assets/img/intersect-right.png') center center no-repeat;
  text-align: left;
  &__title {
    margin-bottom: 0.3rem;
    font-family: 'Bebas Neue Pro Expanded';
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
  }
  &__text {
    font-family: 'Bebas Neue Pro Expanded';
    font-weight: 700;
    font-size: 1rem;
    color: #dcff00;
  }
}
</style>
