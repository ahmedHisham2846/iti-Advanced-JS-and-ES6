var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

console.log(fruits.every((element) => typeof element == "string"));
console.log(fruits.some((element) => element[0] == "a"));
console.log(fruits.filter((element) => element[0] == "b" || element[0] == "s"));
fruits
  .map((element) => `I love ${element}`)
  .forEach((statement) => {
    console.log(statement);
  });
