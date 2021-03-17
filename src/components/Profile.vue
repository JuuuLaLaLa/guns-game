<template>
  <transition duration="400">
    <div class="profile" v-bind:class="{ active: this.profileVisibility }">
      <UserInfo />
      <AboutGame />
      <ButtonStart />
    </div>
    <!-- сброс игры на начало -->
  </transition>
</template>

<script>
import UserInfo from './UserInfo';
import AboutGame from './AboutGame';
import ButtonStart from './ButtonStart';
import { mapState } from 'vuex';
export default {
  name: 'Profile',
  computed: {
    ...mapState('pageState', ['profileVisibility']),
  },
  components: {
    UserInfo,
    AboutGame,
    ButtonStart,
  }
};
</script>

<style scoped lang="scss">
.profile {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: -100%;
  top: 0;
  padding: 8.7rem 2rem 7.5rem 2rem;
  background: url('../assets/img/bg-profile.png') left top repeat-y;
  background-size: contain;
  box-shadow: 4px 0px 60px rgba(255, 255, 255, 0.14);
  z-index: 5;
  transition: left ease 0.2s;

  &.active {
    left: 0;
  }
}
</style>
