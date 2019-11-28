const conditionalSum = function(values, condition) {
  let sum = 0;
  if (condition === "even") {
    for (let x of values) {
      if (x % 2 === 0)
        sum += x;
    }
  } else {
    for (let y of values) {
      if (y % 2 === 1) {
        sum += y;
      }
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));