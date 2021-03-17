<template>
  <div class="main-top__right">
    <div class="button-help" v-bind:class="timer ? 'timer' : ''">
      <a class="button-help__icon" v-on:click.stop.prevent="showHelp"></a>
      <div class="button-help__progress">
        <span class="button-help__time">{{ currentTime }}</span>
        <svg
          class="button-help__svg"
          width="5.3rem"
          height="5.3rem"
          viewPort="0 0 3.1rem 3.1rem"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- <defs>
            <filter id="dropshadow">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="5"
                flood-color="#dcff00"
              />
            </filter>
          </defs> -->
          <circle
            class="button-help__svg-circle"
            r="1.5rem"
            cx="1.7rem"
            cy="1.7rem"
            fill="transparent"
            stroke-dasharray="300"
            stroke-dashoffset="0"
          ></circle>
          <!-- <circle
            class="button-help__shadow"
            r="1.5rem"
            cx="1.7rem"
            cy="1.7rem"
            fill="#dcffoo"
            filter="url(#dropshadow)"
            v-bind:stroke-dasharray="c"
            stroke-dashoffset="0"
            v-bind:style="
              currentTime
                ? 'stroke-dashoffset: ' + timeProgressBar() + 'px;'
                : ''
            "
          ></circle> -->
          <circle
            id="circleProgress"
            class="button-help__svg-progress"
            r="1.5rem"
            cx="-1.7rem"
            cy="1.7rem"
            v-bind:stroke-dasharray="c"
            stroke-dashoffset="0"
            v-bind:style="
              currentTime
                ? 'stroke-dashoffset: ' + timeProgressBar() + 'px;'
                : ''
            "
          ></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'MainTopRight',
  data() {
    return {
      currentTime: 30,
      timer: null,
      r: 0,
      c: 0,
    };
  },
  destroyed() {
    this.stopTimer();
  },
  methods: {
    ...mapActions('pageState', ['updateHelpVisibility']),
    showHelp() {
      this.startTimer();
      this.updateHelpVisibility(true);
      setTimeout(() => {
        this.stopTimer;
      }, 30000);
    },
    startTimer() {
      this.currentTime = 30;
      this.timer = setInterval(() => {
        this.currentTime--;
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    timeProgressBar() {
      let circle = document.getElementById('circleProgress');
      if (circle) {
        this.r = this.convertRemToPx(circle.getAttribute('r'));
        this.c = Math.PI * (this.r * 2);
        let progress = this.c - this.currentTime * (this.c / 30);
        return progress;
      } else return 0;
    },
    convertRemToPx(rem) {
      let remNum = rem.replace('rem', '');
      return remNum * parseFloat(getComputedStyle(document.body).fontSize);
    },
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.main-top__right {
  padding: 2rem;
}
.button-help {
  z-index: 2;
  width: 4.8rem;
  height: 4.8rem;
  background: url('../assets/img/btn-ellipse.png');
  background-size: contain;
  padding: 0.7rem;
  margin-left: 0.5rem;
  float: left;
  &__icon {
    display: block;
    opacity: 1;
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 3.4rem;
    background-color: #08090b;
    background-image: url('../assets/img/help-icon.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 1.3rem 1.3rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: opacity 0.2s ease;
    z-index: 1;

    &:hover {
      opacity: 0.7;
    }
  }
  &.timer {
    background: transparent;
    .button-help__icon {
      opacity: 0;
    }
  }
  &__icon:hover ~ &__wrong {
    opacity: 1;
  }
  &__progress {
    width: 3.1rem;
    height: 3.1rem;
    position: absolute;
    top: 0.85rem;
    left: 0.85rem;
    border-radius: 100%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease;
    .timer & {
      z-index: 3;
      opacity: 1;
    }
  }
  &__time {
    display: block;
    width: 100%;
    position: absolute;
    top: 50%;
    line-height: 2rem;
    margin-top: -1rem;
    text-align: center;
    font-family: 'Bebas Neue Pro Expanded';
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
    z-index: 3;
  }
  &__svg {
    margin-top: -0.15rem;
    margin-left: -0.15rem;
    z-index: 2;
  }
  &__svg-circle {
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 1s linear;
    stroke: #666;
    stroke-width: 0.15rem;
  }
  &__svg-progress {
    stroke: #dcff00 !important;
    transform: rotate(-90deg);
    stroke-width: 0.15rem;
  }
  // &__shadow {
  //   width: 2.3rem;
  //   height: 5.3rem;
  //   stroke-width: 0.2rem;
  // }
}
</style>
