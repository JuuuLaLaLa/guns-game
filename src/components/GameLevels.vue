<template>
  <div class="game-levels">
    <div class="level">
      <div class="level__num">1</div>
      <div class="level__text">LEVEL</div>
      <div class="level__info">
        <div class="level__title">Доступно:</div>
        <div class="level__info-val">20 автоматов</div>
      </div>
      <div class="level__info">
        <div class="level__title">MAX коэффициент:</div>
        <div class="level__info-val">х2</div>
      </div>
    </div>
    <div class="level">
      <div class="level__num">2</div>
      <div class="level__text">LEVEL</div>
      <div class="level__info">
        <div class="level__title">Доступно:</div>
        <div class="level__info-val">20 автоматов</div>
      </div>
      <div class="level__info">
        <div class="level__title">MAX коэффициент:</div>
        <div class="level__info-val">х2.2</div>
      </div>
    </div>
    <div class="level">
      <div class="level__num">3</div>
      <div class="level__text">LEVEL</div>
      <div class="level__info">
        <div class="level__title">Доступно:</div>
        <div class="level__info-val">20 автоматов</div>
      </div>
      <div class="level__info">
        <div class="level__title">MAX коэффициент:</div>
        <div class="level__info-val">х2.5</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GameLevels',
};
</script>
<style scoped lang="scss">
.game-levels {
  width: 100%;
  .level {
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 5.7rem;
    align-items: flex-end;
    &__num {
      width: 2.4rem;
      margin-right: 0.3rem;
      font-weight: 700;
      font-size: 5rem;
      color: #fff;
      line-height: 1.15;
    }
    &__text {
      width: 1.2rem;
      height: 100%;
      padding: 1rem 0;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      font-family: 'Bebas Neue Pro Expanded Book';
      font-weight: 400;
      font-size: 1rem;
      color: rgba(#fff, .6);
      line-height: 1.15;
      letter-spacing: 0.35rem;
    }
    &__info {
      margin-left: .9rem;
      padding-bottom: 1rem;
    }
    &__title {
      margin-bottom: 0.5rem;
      font-family: 'Bebas Neue Pro Expanded';
      font-size: 1rem;
      font-weight: 700;
      color: #fff;
    }
    &__info-val {
      font-family: 'Bebas Neue Pro Expanded';
      color: rgba(#fff, .6);
    }
  }
}
</style>
