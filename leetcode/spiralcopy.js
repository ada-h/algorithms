function removeTop(matrix) {
    if (matrix.length === 0) {
      return [];
    }
    return [].concat(matrix.shift(), removeRight(matrix));
  }
  
  function removeRight(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
      return [];
    }
    let rightCol = [];
    matrix.forEach((r) => rightCol.push(r.pop()));
    return [].concat(rightCol, removeBottom(matrix));
  }
   
  function removeBottom(matrix) {
    if (matrix.length === 0) {
      return [];
    }
    return [].concat(matrix.pop().reverse(), removeLeft(matrix));
  }
  
  function removeLeft(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
      return [];
    }
    const leftCol = [];
    matrix.forEach((r) => leftCol.unshift(r.shift()));
    return [].concat(leftCol, removeTop(matrix));
  }
  
  // Test Cases.
  
  console.log(removeTop([]));
  // []
  
  console.log(removeTop([[]]));
  // []