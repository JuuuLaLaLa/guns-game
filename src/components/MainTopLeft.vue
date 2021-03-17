<template>
  <div class="main-top__left">
    <ButtonExit />
    <ButtonProfile />
    <Profile />
  </div>
</template>

<script>
import Profile from './Profile';
import ButtonExit from './ButtonExit';
import ButtonProfile from './ButtonProfile';
export default {
  name: 'MainTopLeft',
  components: {
    Profile,
    ButtonExit,
    ButtonProfile,
  },
};
</script>

<style scoped lang="scss">
.main-top__left {
  width: 23.2rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem 0 0 2rem;
}
</style>
