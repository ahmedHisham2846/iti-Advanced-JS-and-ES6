let arr = ["mona", "ali", "ahmed"];

arr[Symbol.iterator] = getValue;

function* getValue() {
  for (let x = 0; x < this.length; x++) {
    yield this[x];
  }
}

for (let iterator of arr) {
  console.log(iterator);
}
