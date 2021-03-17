<template>
  <div class="reference-gun clearfix">
    <div class="reference-gun__info clearfix">
      <div class="reference-gun__name">{{ gun.name }}</div>
      <div class="reference-gun__price">{{ '$ ' + gun.price }}</div>
    </div>
    <div class="reference-gun__img-container">
      <img class="reference-gun__img" v-bind:src="imgPath" />
    </div>
    <div class="reference-gun__details clearfix">
      <ReferenceGunDetail
        v-for="detail of details"
        v-bind:detail="detail"
        v-bind:gunId="gun.id"
        v-bind:key="detail.id"
      />
    </div>
  </div>
</template>
<script>
import ReferenceGunDetail from './ReferenceGunDetail';
import { mapState } from 'vuex';
export default {
  name: 'ReferenceGun',
  props: {
    gun: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('gunsData', ['details']),
    imgPath() {
      let gunNum = 'gun' + this.gun.id;
      let gunPath = './img/guns/' + gunNum + '/' + gunNum + '-1111.png';
      return gunPath;
    },
  },
  components: {
    ReferenceGunDetail,
  },
};
</script>
<style scoped lang="scss">
.reference-gun {
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(#fff, 0.2);
  &__info {
    margin-top: 1rem;
    font-size: 1.1rem;
    line-height: 1.3rem;
  }
  &__name {
    float: left;
    font-weight: 700;
    color: #fff;
  }
  &__price {
    float: right;
    color: #c1e704;
  }
  &__img-container {
    display: flex;
    align-items: center;
    margin-top: 0.8rem;
    width: 100%;
    height: 7.7rem;
    background: url('../assets/img/reference-gun-bg.png') center center
      no-repeat;
    background-size: 100% auto;
  }
  &__img {
    display: block;
    width: 80%;
    margin: 0 auto;
  }
}
</style>
