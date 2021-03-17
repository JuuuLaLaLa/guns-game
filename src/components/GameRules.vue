<template>
  <div class="game-rules">
    <div class="rule">
      <div class="rule__title">Основное:</div>
      <div class="rule__text">
        Тебе нужно собирать автоматы на скорость, чтобы зарабатывать деньги.
      </div>
    </div>
    <div class="rule">
      <div class="rule__title">Как:</div>
      <div class="rule__text">
        В нижних ячейках появляются части от разных автоматов. Выбери ту часть,
        которая относится к тому, что на экране (доработать текст). Подробнее
        изучить комплектацию автомата , ты можешь в справочнике
      </div>
    </div>
    <div class="rule">
      <div class="rule__title">Увеличение коэффициента:</div>
      <div class="rule__text">
        Коэффициент зависит от точности и быстрой скорости. Каждый раз, как
        правильно указываешь верную часть, коэффициент повышается.
      </div>
    </div>
    <div class="rule">
      <div class="rule__title">Бонус игра:</div>
      <div class="rule__text">
        Бонус игра появляется каждые 10 сборок автоматов
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GameRules',
};
</script>
<style scoped lang="scss">
.game-rules {
  padding-top: 1.6rem;
  .rule {
    margin-bottom: 1.2rem;
    &__title {
      margin-bottom: 0.4rem;
      font-family: 'Bebas Neue Pro Expanded';
      font-size: 1rem;
      font-weight: bold;
      line-height: 1.2rem;
    }
    &__text {
      font-family: 'Bebas Neue Pro Expanded';
      font-size: 1rem;
      font-weight: normal;
      color: rgba(#fff, 0.6);
    }
  }
}
</style>
