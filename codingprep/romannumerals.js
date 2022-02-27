function FormatRomanNumerals(s) {
  //assume that the roman numerals are in capital letters
  let romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  const myArray = s.split("");
  let numericValues = myArray.map(e => romanNumerals[e]);
  let total = 0;
  for (let i = 0; i < numericValues.length; i++) {
    if (numericValues[i + 1] && numericValues[i] < numericValues[i + 1]) {
      total = total - numericValues[i];
    } else {
      total = total + numericValues[i];
    }
  }

  return total;
}
console.log(FormatRomanNumerals("MCMXCIV"));
