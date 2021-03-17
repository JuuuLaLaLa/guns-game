<template>
  <div class="about-game">
    <div class="about-game__tabs">
      <button
        class="about-game__tab"
        v-bind:key="'Rules'"
        v-bind:class="['tab-button', { active: currentTab === 'Rules' }]"
        v-on:click="currentTab = 'Rules'"
      >
        Правила
      </button>
      <button
        class="about-game__tab"
        v-bind:key="'Reference'"
        v-bind:class="['tab-button', { active: currentTab === 'Reference' }]"
        v-on:click="currentTab = 'Reference'"
      >
        Справочник
      </button>
      <button
        class="about-game__tab"
        v-bind:key="'Levels'"
        v-bind:class="['tab-button', { active: currentTab === 'Levels' }]"
        v-on:click="currentTab = 'Levels'"
      >
        Уровни
      </button>
    </div>

    <component v-bind:is="currentTabComponent" class="tab"></component>
  </div>
</template>
<script>
import GameRules from './GameRules';
import GameReference from './GameReference';
import GameLevels from './GameLevels';
export default {
  name: 'AboutGame',
  computed: {
    currentTabComponent: function() {
      return 'Game' + this.currentTab;
    },
  },
  data() {
    return {
      currentTab: 'Rules',
    };
  },
  components: {
    GameRules,
    GameReference,
    GameLevels,
  },
};
</script>
<style scoped lang="scss">
.about-game {
  width: 100%;
  margin-top: 2rem;
  &__tabs {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 3.2rem;
    border-bottom: 1px solid rgba(#fff, 0.2);
  }
  &__tab {
    background: transparent;
    line-height: 3.2rem;
    text-transform: uppercase;
    border-bottom: 0.1rem solid transparent;
    cursor: pointer;
    font-family: 'Bebas Neue Pro Expanded';
    font-weight: 400;
    font-size: 1.2rem;
    transition: border 0.2s ease;
    &.active {
      border-bottom: 0.1rem solid #dcff00;
    }
  }
}
</style>
