const add = function(num1, num2) {
	let sum = 0;
  sum = num1 + num2;

  return sum;
};

const subtract = function(num1, num2) {
	let result = 0;
  result = num1 - num2;

  return result;
};

const sum = function(array) {
  let result = 0;

  if(array == '') {
    return result;
  } else {
    for(let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  }
};


const multiply = function(array) {
  let result = 1;

  for(let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  
  return result;
};

const power = function(num1,num2) {
	let result = 0;

  result = num1 ** num2;

  return result;
};

const factorial = function(n) {
  let factorial = 1;
	if(n === 0) {
    return 1;
  } else if(n === 1) {
    return 1;
  } else if(n > 1) {
    for(let i = n; i > 1; i--) {
      factorial *= i;
    }
    return factorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
