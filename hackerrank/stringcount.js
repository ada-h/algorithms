// function stringCount(string){
//     let dict = new Map();
//     let stringnumber = ''
//     for(let i=0; i<string.length; i++){
    
//         let itExists = dict.has(string[i])
//         if(itExists){
//             dict.set(string[i], dict.get(string[i]) + 1)
//         }else{
//             dict.set(string[i], 1)
//         }
//     }
//     dict.forEach((value, key, map) =>{
//         stringnumber += key + value
//         // if(value < 2){
//         //     stringnumber += key 
//         // }else{
//         //     stringnumber += key + value
//         // }
       
//     })

//     return stringnumber
// } 

// console.log(stringCount('aaabbac'))


function spiralCopy(inputMatrix) {
    // your code goes here
    let flattenedArr = [];
    
    if(inputMatrix.length <= 1){
      return [...flattenedArr, ...inputMatrix];
    }
    
    //return [...spiralCopy(...getTop(inputMatrix), ...getRight(inputMatrix), ...getBottom(inputMatrix), ...getLeft(inputMatrix))]
    return getTop(inputMatrix)
   
  }
  
  function getTop(inputMatrix){
    let top = inputMatrix[0];
    inputMatrix.shift();
    return top;
  }
  
  function getRight(inputMatrix){
    let rightCol = [];
    for(let i=0; i< inputMatrix.length - 1; i++){
      rightCol.push(inputMatrix[i][inputMatrix[i].length - 1]);
      inputMatrix.pop(inputMatrix[i][inputMatrix[i].length - 1]);
      
    }
    console.log(rightCol, 'i am right')
    return rightCol;
  }
  
  function getBottom(inputMatrix){
    let bottomCol = inputMatrix[inputMatrix.length - 1];
    inputMatrix.pop();
    return bottomCol.reverse();
  }
  
  function getLeft(inputMatrix){
    let leftCol = [];
    
    for(let i=inputMatrix.length - 1; i >= 0 ; i--){
      leftCol.push(inputMatrix[i][0]);
      inputMatrix.pop(inputMatrix[i][0]);
      
    }
    return leftCol;
  
  }
  

  console.log(spiralCopy([ [1,    2,   3,  4,    5],
    [6,    7,   8,  9,   10],
    [11,  12,  13,  14,  15],
    [16,  17,  18,  19,  20] ]
))