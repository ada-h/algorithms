function permcheck(array) {
  let sortedArray = array.sort();
  let permSum = 0;
  let arraySum = array.reduce((a, b) => a + b);
  let lastNumber = sortedArray[array.length - 1];
  for (let i = 0; lastNumber > 0; i++) {
    permSum += lastNumber;
    lastNumber = lastNumber - 1;
  }
  if (arraySum === permSum) {
    return 1;
  }
  return 0;
}

console.log(permcheck([4, 1, 1, 3]));
