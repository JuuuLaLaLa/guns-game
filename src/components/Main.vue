<template>
  <div class="main">
    <MainTop />
    <MainMiddle />
    <MainBottom />
  </div>
</template>

<script>
import MainTop from './MainTop';
import MainMiddle from './MainMiddle';
import MainBottom from './MainBottom';

export default {
  name: 'Main',
  components: {
    MainTop,
    MainMiddle,
    MainBottom,
  },
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 96rem;
  height: 54rem;
  background: url('../assets/img/bg-main.jpg');
  background-size: cover;
}
</style>
