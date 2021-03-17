export default {
  namespaced: true,
  state: {
    guns: [
      { id: 1, name: 'Автомат 1', price: 2000000 },
      { id: 2, name: 'Автомат 2', price: 1500000 },
      { id: 3, name: 'Автомат 3', price: 300000 },
      { id: 4, name: 'Автомат 4', price: 2750000 },
      { id: 5, name: 'Автомат 5', price: 15000 },
      { id: 6, name: 'Автомат 6', price: 400000 },
      { id: 7, name: 'Автомат 7', price: 100500 },
      { id: 8, name: 'Автомат 8', price: 800000 },
    ],
    details: [
      { id: 1, name: 'Приклад' },
      { id: 2, name: 'Ручка' },
      { id: 3, name: 'Магазин' },
      { id: 4, name: 'Дуло' },
    ],
  },
  getters: {
    getGunByIndex: (state) => (id) => {
      return state.guns.find((gun) => gun.id === id);
    },
    getRandomGuns: (state) => (currentGun) => {
      let gunsArr = [1, 2, 3, 4, 5, 6, 7, 8];
      let shuffledGuns = gunsArr.sort(function() {
        return 0.5 - Math.random();
      });
      let selectedGuns = shuffledGuns.slice(0, 5);
      if (selectedGuns.toString().indexOf(currentGun, 0) == -1) {
        selectedGuns[1] = currentGun;
        selectedGuns = selectedGuns.sort(function() {
          return 0.5 - Math.random();
        });
      }
      return selectedGuns;
    },
  },
};
