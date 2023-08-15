/**
 * 
 * 
 * Create a generator that returns fibonacci series that takes only
one parameter. Make two different implementations as described
below:
a. the parameter passed determines the number of elements
displayed from the series.
b. the parameter passed determines the max number of the
displayed series should not exceed its value.
 */

function* printNumberOfElement(count) {
  let lastNumber = 0;
  let current = 1;
  for (let i = 0; i < count; i++) {
    yield current;
    current += lastNumber;
    lastNumber = current - lastNumber;
  }
}

for (let iterator of printNumberOfElement(18)) {
  console.log(iterator);
}
console.log("--------------------------");
function* printUsingMaxNumber(max) {
  let lastNumber = 0;
  let current = 1;
  while (current <= max) {
    yield current;
    current += lastNumber;
    lastNumber = current - lastNumber;
  }
}

for (let iterator of printUsingMaxNumber(18)) {
  console.log(iterator);
}
