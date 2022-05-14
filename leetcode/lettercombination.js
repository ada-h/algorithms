// var letterCombinations = function(digits) {
//     let numbersDict = {2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz"}
    
//     if (digits.length === 0) { return []}
//     //results after pairing
//     const results = [];
    
//     const dfs = (i, digits, slate )=>{
//         if(i === digits.length){
//             results.push(slate.join(""));
//             return;
//         }

//         let chars = numbersDict[digits[i]];
//         for(let char of chars){
//             slate.push(char);
//             dfs(i+1, digits, slate);
//             slate.pop();
//         }
//     }
//     dfs(0, digits, []);
//     return results
    
    
// };

// console.log(letterCombinations("23"))


function getIndicesOfItemWeights(arr, limit) {
    // your code goes here
    
    //let arrPair = [];
    
    //for(let i=0; i < arr.length; i++){
    //  for(let j = i + 1; j < arr.length; j++){
    //    if(arr[i] + arr[j] === limit){
    //     arrPair.push(j, i);
     //     return arrPair
     //   }
        
    //  }
    //}
    
    let arrPair = new Map();
    
    for(let i= arr.length - 1; i > 0;  i--) {
      let difference = limit - arr[i];
      let itExists = arrPair.has(arr[i]);
      if(itExists){
         return [].concat(i, arrPair.get(arr[i]));
         
      }
      arrPair.set(difference, i);
    }
    
    return []
  }
  

console.log(getIndicesOfItemWeights([4, 6, 10, 15, 16], 21))