
let person = {
  name: "ahmed",
  address: "ST.123",
  age: 24,
};

const handler = {
  get(target, prop) {
    if (!(prop in target)) {
      throw "this properity not defined";
    }
    return target[prop];
  },
  set: function (target, prop, value) {
    if (prop === "name" && value.length != 7) throw "name must be 7 chars";
    if (prop === "address" && typeof value != "string")
      throw "address must be a text";
    if (prop === "age" && !(value >= 25 && value <= 60))
      throw "age property that accepts numerical value between 25 and 60";
    target[prop] = value;
    return true;
  },
};

const proxy = new Proxy(person, handler);

// proxy.name = "blabla";
proxy.name = "blablaa";
console.log(proxy.name);
// proxy.address = 567;
proxy.address = "ST. 567";
// proxy.age = 1;
proxy.age = 25;
console.log(proxy.name);
console.log(proxy.address);
console.log(proxy.age);
// console.log(proxy.hahah);
