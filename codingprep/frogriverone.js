function countdistance(distance, array) {
  let allDistance = new Map();
  for (let i = 1; i <= distance; i++) {
    allDistance.set(i, false);
  }
  for (let j = 0; j < array.length; j++) {
    allDistance.set(array[j], true);
    let allTrue = true;
    for (const [key, value] of allDistance) {
      if (value === false) {
        allTrue = false;
      }
    }
    if (allTrue) {
      return j;
    }
  }
  return -1;
}

//console.log(countdistance(3, [1, 3, 1, 3, 2, 1, 3]));
//console.log(countdistance(2, [2, 2, 2, 2, 2]));
console.log(countdistance(5, [1, 3, 1, 4, 2, 3, 5, 4]));
