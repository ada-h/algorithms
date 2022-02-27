function solution(A) {
  let uniqueNumbers = new Map();
  if (A.length === 1) {
    return A[0];
  }
  for (let i = 0; A.length > i; i++) {
    if (uniqueNumbers.has(A[i])) {
      uniqueNumbers.set(A[i], false);
    } else {
      uniqueNumbers.set(A[i], true);
    }
  }
  for (const [key, value] of uniqueNumbers) {
    if (value) {
      return key;
    }
  }
  return -1;
}
solution([4, 10, 5, 4, 2, 10]);
