<template>
  <div class="reference-gun-detail">
    <div class="reference-gun-detail__name">{{ detail.name }}</div>
    <div class="reference-gun-detail__container">
      <img class="reference-gun-detail__img" v-bind:src="imgPath" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'ReferenceGunDetail',
  props: {
    detail: {
      type: Object,
      required: true,
    },
    gunId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    imgPath() {
      let gunNum = 'gun' + this.gunId;
      let detailNum = 'detail' + this.detail.id;
      let detailPath = './img/details/' + gunNum + '/' + detailNum + '.png';
      return detailPath;
    },
  },
};
</script>
<style scoped lang="scss">
.reference-gun-detail {
  margin-top: 0.8rem;
  width: 9.1rem;
  height: 6rem;
  float: left;

  &:nth-child(odd) {
    margin-right: 1rem;
  }
  &__name {
    width: 100%;
    padding-bottom: .2rem;
    margin-bottom: .6rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    line-height: 1.15;
    background: url('../assets/img/detail-name-bg.png') left bottom no-repeat;
    background-size: 100% auto;
  }
  &__container {
    width: 100%;
    height: 4rem;
    background: url('../assets/img/detail-angles.png') center center no-repeat;
    background-size: contain;
    padding: .6rem 0;
  }
  &__img {
    display: block;
    height: 2.2rem;
    margin: 0 auto;
  }
}
</style>
