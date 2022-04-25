function arrList(array) {
  let constructedArray = [];
  let node = 0;
  for (let i = 0; i < array.length; i++) {
    if (node === -1) {
      constructedArray[constructedArray.length] = array[i];
      return constructedArray;
    }
    constructedArray[node] = array[i];
    node = array[i];
  }
  return constructedArray;
}
console.log(arrList([1, 4, -1, 3, 2]));
