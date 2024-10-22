const sumAll = function(...args) {
  let sum = 0;

  let firstNumber = args[0]
  let lastNumber = args[args.length - 1]

  if (Number.isInteger(firstNumber) && Number.isInteger(lastNumber) && !Number.isNaN(firstNumber) && !Number.isNaN(lastNumber) && !(firstNumber < 0) && !(lastNumber < 0)){

    if (firstNumber < lastNumber){
      for (a = firstNumber; a <= lastNumber; a++){
        sum += a
      }
    }
    
    if (firstNumber > lastNumber){
      for (a = firstNumber; a >= lastNumber; a--){
        sum += a
      }
    }

  } else {
    sum = 'ERROR'
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

// npm test 05_sumAll/sumAll.spec.js