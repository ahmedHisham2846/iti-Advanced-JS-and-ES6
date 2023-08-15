
let person = {
  name: "ahme",
  age: 34,
};
person[Symbol.iterator] = function () {
  let step = 0;
  let iterator = {
    next: () => {
      let keys = Object.keys(this);
      if (step == keys.length) {
        return { value: undefined, done: true };
      } else {
        return { value: this[keys[step++]], done: false };
      }
    },
  };
  return iterator;
};

for (let value of person) {
  console.log(value);
}
