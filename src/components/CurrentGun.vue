<template>
  <div class="current-gun">
    <div class="current-gun__name">{{ getGunByIndex(currentGun).name }}</div>
    <div class="current-gun__price">
      $ {{ getGunByIndex(currentGun).price }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'CurrentGun',
  computed: {
    ...mapState('gameState', ['currentGun']),
    ...mapGetters('gunsData', ['getGunByIndex']),
  },
};
</script>

<style scoped lang="scss">
.current-gun {
  margin-top: 3rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;

  &__name,
  &__price {
    display: inline-block;
    line-height: 2.3rem;
  }

  &__name {
    margin-right: 0.6rem;
    color: #fff;
  }

  &__price {
    margin-left: 0.6rem;
    color: #c1e704;
  }
}
</style>
