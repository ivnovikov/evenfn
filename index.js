const mod = (() => {
  const DELAY = 5000;
  const state = new Map();

  const getDelay = val => {
    state.set(val, state.has(val) ? 0 : DELAY);
    return state.get(val);
  };

  return {
    isEven: num => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(num % 2 === 0);
        }, getDelay(num));
      });
    },
  };
})();

const main = async () => {
  console.log(await mod.isEven(1));
  console.log(await mod.isEven(1));
  console.log(await mod.isEven(1));
  console.log(await mod.isEven(5));
  console.log(await mod.isEven(2));
  console.log(await mod.isEven(2));
  console.log(await mod.isEven(3));
  console.log(await mod.isEven(2));
  console.log(await mod.isEven(1));
};

main();
