<template>
  <div class="game-detail" v-on:click.stop="checkAnswer($event)">
    <span class="game-detail__message"></span>
    <img v-bind:src="imgPath" class="game-detail__image" />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "GameDetail",
  props: {
    gunNum: {
      type: Number,
      required: true,
    },
    currentDetail: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState("gunsData", ["details"]),
    ...mapState("gameState", [
      "currentGun",
      "gameProgress",
      "gameProgressNum",
      "dateTime",
    ]),
    ...mapState("pageState", ["pageDisabled", "animationActive"]),
    ...mapState("gameState", ["gameBonus"]),

    imgPath() {
      let gunNum = "gun" + this.gunNum;
      let detailNum = "detail" + this.currentDetail;
      let detailPath = "./img/details/" + gunNum + "/" + detailNum + ".png";
      return detailPath;
    },
  },
  methods: {
    ...mapActions("gameState", [
      "updateGameProgress",
      "updateCurrentDetail",
      "updateGameBonus",
    ]),
    ...mapActions("pageState", [
      "updatePageDisabled",
      "updateFinalDetail",
      "updateAnimationActive",
    ]),
    checkAnswer($event) {
      let audio = new Audio();
      if (this.gunNum == this.currentGun) {
        $event.target.classList.add("correct");
        $event.target.querySelector(".game-detail__message").innerHTML =
          "correct!";
        this.updateGameProgress(this.currentDetail - 1);

        audio.src = "/media/correct.mp3";

        if (Date.now() - this.dateTime < 3000) {
          this.updateGameBonus(this.gameBonus + 10);
          audio.src = "/media/bonus.mp3";
        }
      } else {
        $event.target.classList.add("incorrect");
        $event.target.querySelector(".game-detail__message").innerHTML =
          "wrong!";
        audio.src = "/media/incorrect.mp3";
      }
      audio.autoplay = true;
      this.updatePageDisabled(true);

      let timeOut = 800;
      if (this.currentDetail == 4) {
        setTimeout(this.updateFinalDetail, 800, true);
        setTimeout(this.updateAnimationActive, 800, true);
        timeOut = 7000;
        let audio = new Audio();
        audio.src = "/media/complete.mp3";
        audio.autoplay = true;
      }
      setTimeout(() => {
        this.nextLevel($event);
        $event.target.classList.remove("correct");
        $event.target.classList.remove("incorrect");
      }, timeOut);
    },
    nextLevel() {
      this.updateCurrentDetail();
      this.updatePageDisabled(false);
      this.updateFinalDetail(false);
      this.updateAnimationActive(false);
    },
  },
};
</script>
<style scoped lang="scss">
.game-detail {
  width: 14.9rem;
  height: 9.4rem;
  margin: 0 0.3rem;
  background: url("../assets/img/detail-container.png") center center no-repeat;
  background-size: contain;
  text-align: center;
  line-height: 9.4rem;
  cursor: pointer;

  &.correct {
    background: url("../assets/img/detail-container-true.png");
  }
  &.incorrect {
    background: url("../assets/img/detail-container-false.png");
  }

  &.correct,
  &.incorrect {
    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: url("../assets/img/detail-container-candies.png") center
        center no-repeat;
      background-size: contain;
    }
  }

  &:hover {
    &:before,
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    &:before {
      background: radial-gradient(
        farthest-corner at -5rem -5rem,
        rgba(#566172, 0.7) 0%,
        rgba(39, 45, 54, 0) 100%
      );
      background-position: -50% -50%;
    }
    &:after {
      background: url("../assets/img/detail-container-candies.png") center
        center no-repeat;
      background-size: contain;
    }
  }

  &__image {
    display: inline;
    vertical-align: middle;
  }
  &__message {
    display: none;
    position: absolute;
    top: -2.2rem;
    left: 0;
    width: 100%;
    font-family: "Bebas Neue Pro Expanded";
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.7rem;
    text-transform: uppercase;

    .correct & {
      display: block;
      color: #dcff00;
    }
    .incorrect & {
      display: block;
      color: #f00;
    }
  }
  audio {
    display: none;
  }
}
</style>
