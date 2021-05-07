const f = function () {
  this.state = new Map();

  this.checkValue = async function (num) {
    const current = {
      value: num,
      even: num % 2 === 0,
      delay: this.state.has(num) ? 0 : 5000,
    };
    this.state.set(num, true);
    return current;
  };

  this.isEven = async function (val) {
    const result = await this.checkValue(val);
    return new Promise(resolve => {
      setTimeout(() => resolve(result.even), result.delay);
    });
  };
};

const main = async () => {
  const mod = new f();
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
