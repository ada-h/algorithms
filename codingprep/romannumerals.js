// function FormatRomanNumerals(s) {
//   //assume that the roman numerals are in capital letters
//   let romanNumerals = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//   };
//   const myArray = s.split("");
//   let numericValues = myArray.map(e => romanNumerals[e]);
//   let total = 0;
//   for (let i = 0; i < numericValues.length; i++) {
//     if (numericValues[i + 1] && numericValues[i] < numericValues[i + 1]) {
//       total = total - numericValues[i];
//     } else {
//       total = total + numericValues[i];
//     }
//   }

//   return total;
// }

// var romanToInt = function(s) {
    
//   let romanDict = {
//               I : 1,
//               V : 5,
//               X :10,
//               L :50,
//               C :100,
//               D : 500,
//               M :1000
//   }
//   let total = 0;
//   for(let i=0; i < s.length; i++){
//       if(romanDict[s[i + 1]] !== undefined & romanDict[s[i]] < romanDict[s[i + 1]]){
//           let diff = romanDict[s[i + 1]] - romanDict[s[i]];
//           console.log(diff,  i, 'i am the difference')
//           total += diff
//           i++
//       }else{
//           total += romanDict[s[i]]
//       }
      
//   }
//   return total
// };

var isValid = function(s) {


  let checkPos = 0

  while(checkPos < s.length){
    if((s[checkPos] + s[checkPos + 1]) === "{}" || (s[checkPos] + s[checkPos + 1]) === "[]" || (s[checkPos] + s[checkPos + 1]) === "()"){
      s.replace((s[checkPos] + s[checkPos + 1]), '')
    }
    checkPos++
  }

  console.log(s, 'i am the string validity')
  return s.length === 0 ? true : false
  // let dict = {"(" : ")", "{" : "}", "[" : "]"}
  // let stackdictionary = []
  
  // for(let i=0; i < s.length; i++){
  //     if(dict[s[i]] !== s[i+ 1] || s[i + 1] === undefined){
  //       if(stackdictionary[stackdictionary.length -1] === undefined ||  dict[stackdictionary[stackdictionary.length -1]] !== s[i] ){
  //         stackdictionary.push(s[i]);
  //       }else{
  //         stackdictionary.pop();
  //       }
  //     }else{
  //       i++
  //     }
  // }

  // return stackdictionary.length !== 0 ? false : true

};

console.log(isValid("()[]{}"));
// console.log(isValid("()"))
//console.log(isValid("[{()}]"));
 console.log(isValid("(]"))
//console.log(isValid("(){}}{"))


//console.log(FormatRomanNumerals("MCMXCIV"));
// console.log(romanToInt("MCMXCIV"));
//console.log(romanToInt("IX"));
// console.log(romanToInt("VI"));

