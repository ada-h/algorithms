function palindrome (n){
    let iterator = n%2 == 0 ? n/2 : (n-1)/2
    let palindrome = true
    for(let i=0; i < iterator; i++){
    if(n[i] === n[n.length -1]){
      palindrome = false
    }
        return palindrome
    }
  }
  
  function convertBases(n){
    let baseMap = new Map();
    let noOfBases = n - 2
    for(let i =2; i < noOfBases; i++){
      let base = n.toString(i);
      let palindromestate = palindrome(base);
      baseMap.set(i, palindromestate)
    }
    let baseState = baseMap.has(true)
    return baseState ? "Not Strictly non-palindromic" : "Strictly non-palindromic"
  }