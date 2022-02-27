function solution(string) {
  if (string.length === 0 || string.length % 2 === 0) {
    return -1;
  } else if (string.length === 1) {
    return 0;
  } else {
    let middleNumber = (string.length - 1) / 2;
    for (let i = 0; i < middleNumber; i++) {
      let indexfromBehind = string.length - (i + 1);
      if (string[i] !== string[indexfromBehind]) {
        return -1;
      }
    }
    return middleNumber;
  }
}

solution("poop");
