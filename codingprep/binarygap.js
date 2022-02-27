function solution(N) {
  let binaryNumber = N.toString(2);
  let binaryGap = 0;
  let numberofOs = 0;
  let initialNumber = binaryNumber[0];
  for (let i = 0; binaryNumber.length > i; i++) {
    if (initialNumber === "0") {
      initialNumber = binaryNumber[i];
    } else if (binaryNumber[i] === "1") {
      if ((numberofOs > binaryGap) & (numberofOs > 1)) {
        binaryGap = numberofOs;
      }
      numberofOs = 0;
    } else if (binaryNumber[i] === "0") {
      numberofOs = numberofOs + 1;
    }
  }
  return binaryGap;
}
solution(51712);
