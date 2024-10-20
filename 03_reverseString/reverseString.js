const reverseString = function(word) {

  output = word.split("");

  let popped = ``

  for (i = output.length - 1; i >= 0; i--){
    popped += output.pop()
  }

  // for (char of output) {
  //   popped += output.pop()
  // }

  return popped

  // output = word.split("").join("")
  // return output
};

// Do not edit below this line
module.exports = reverseString;

// npm test reverseString.spec.js     