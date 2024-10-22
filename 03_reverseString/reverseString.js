const reverseString = function(word) {

  output = word.split("");

  let popped = ``

  for (i = output.length - 1; i >= 0; i--){
    popped += output.pop()
  }

  return popped
};

// Do not edit below this line
module.exports = reverseString;

// npm test reverseString.spec.js     