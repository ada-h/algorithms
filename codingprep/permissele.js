function solution(array) {
  let sumofIndicies = 0;
  let sumofIntegers = 0;

  for (let i = 0; i < array.length; i++) {
    sumofIndicies = sumofIndicies + i + 1;
    sumofIntegers += array[i];
  }
  console.log(sumofIndicies, sumofIntegers, "i am sum of indicies");
  return sumofIntegers - sumofIndicies;
}

console.log(solution([1, 3]));
