function solution(array) {
  let sumofIndicies = 0;
  let sumofIntegers = 0;

  for (let i = 0; i < array.length; i++) {
    sumofIndicies = sumofIndicies + i + 1;
    sumofIntegers += array[i];
  }
  return !array.includes(1)
    ? 1
    : array.length === 0
    ? 1
    : sumofIntegers - sumofIndicies;
}

console.log(solution([1, 3]));
