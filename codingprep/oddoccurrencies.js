function oddoccurrence(array) {
  let arrayValues = new Map();
  for (let i = 0; i < array.length; i++) {
    if (arrayValues.has(array[i])) {
      arrayValues.delete(array[i]);
    } else {
      arrayValues.set(array[i], true);
    }
  }
  for (const [key, value] of arrayValues) {
    if (value) {
      return key;
    }
  }
}

// function oddoccurrence(array) {
//   let currentItem = array[0];
//   for (let i = 1; i < array.length; i++) {
//     let positionofitem = array.indexOf(currentItem, i);
//     if (positionofitem !== -1) {
//       array.splice(positionofitem, 1);
//       currentItem = array[i];
//     }
//   }
//   return currentItem;
// }

console.log(oddoccurrence([9, 3, 9, 3, 9, 7, 9]));
