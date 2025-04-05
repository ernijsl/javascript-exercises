const add = function(x, y) {
	return x + y;
};

add(0, 0)
add(2, 2)
add(2, 6)


const subtract = function(x, y) {
	return x - y;
};

subtract(10, 4);
subtract(-10, -4);
subtract(-8, 7); 

const sum = function(arr) {
  let result = 0;

	for(let i = 0; i < arr.length; i++){
    result = arr[i] + result;
  }
  return result;
};

sum([]);               // ➡️ 0         (empty array)
sum([7]);              // ➡️ 7         (one number)
sum([7, 11]);          // ➡️ 18        (two numbers)
sum([1, 3, 5, 7, 9]);  // ➡️ 25        (many numbers)


const multiply = function(arr) {
  let result = 1;

  for(let i = 0; i < arr.length; i++){
    result = arr[i] * result;
  }
  return result;
};

multiply([2, 4]);                               // ➡️ 8
multiply([2, 4, 6, 8, 10, 12, 14]);              // ➡️ 645120

const power = function(x, y) {
  let result = x;

	for(let i = 1; i < y; i++){
    result = result * x;
  };

  return result;
};

power(4, 3);    // ➡️ 64      (4³ = 64)
power(3, 10);   // ➡️ 59049   (3¹⁰ = 59049)


const factorial = function(number) {
	if(number === 0){
    return 1;
  };

  let arr = [];

  for(let i = 1; i < number + 1; i++){
    arr.push(i);
  };

  let result = 1;

  for(i = 0; i < arr.length; i++){
    result = result * arr[i]
  };

  return result;
};


factorial(0);   // ➡️ 1      (by definition)
factorial(1);   // ➡️ 1
factorial(2);   // ➡️ 2      (2 × 1)
factorial(5);   // ➡️ 120    (5 × 4 × 3 × 2 × 1)
factorial(10);  // ➡️ 3628800


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
