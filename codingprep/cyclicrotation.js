function cyclicRotation(A, K) {
  if (A.length === K || A.length === 1) {
    return A;
  }
  let newArray = A;
  for (let i = 0; i < K; i++) {
    newArray.unshift(A[A.length - 1]);
    newArray.pop();
  }
  return newArray;
}

console.log(cyclicRotation([3, 8, 9, 7, 6], 3));
