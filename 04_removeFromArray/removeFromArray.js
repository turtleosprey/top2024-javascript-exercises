const removeFromArray = function(original, ...args) {

  let returnArray = []
  let revisedArray = original.forEach(removingArray)

  function removingArray(value){
    if (!args.includes(value)){
      returnArray.push(value)
    }
  }
  return returnArray


}

// let returnArray = []
//   let revisedArray = original.forEach(removingArray)

//   function removingArray(value){
//     for (a=0; a<= args.length-1; a++){
//       if (args[a] === value){
//        continue
//       } else returnArray.push(value)
//     }
//   }
//   return returnArray

// Do not edit below this line
module.exports = removeFromArray;


// npm test removeFromArray.spec.js