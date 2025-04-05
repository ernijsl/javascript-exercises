const convertToCelsius = function(fahrenheit) {

  let number = (fahrenheit - 32) * (5 / 9);
  return Math.round(number * 10) / 10
};

convertToCelsius(-100)

const convertToFahrenheit = function(celsius) {

  let number = (celsius * 9 / 5 + 32)
  return Math.round(number * 10) / 10

};

convertToFahrenheit(-10)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
