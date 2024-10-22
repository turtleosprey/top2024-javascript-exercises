const convertToCelsius = function(degree) {
  degree = (degree-32)*5/9
  return +Number.parseFloat(degree).toFixed(1)
};

const convertToFahrenheit = function(degree) {
  degree = (degree * 9/5) + 32
  return +Number.parseFloat(degree).toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// npm test tempConversion.spec.js
