// var longestPalindrome = function(s) {
//     if(s.length === 1){
//         return s
//     }
//     let textLength = s.length % 2 == 0 ? s.length/2 :( s.length - 1) / 2;
//     let substringIndex = 0;
//     let isPalindrome = false;

//     for(let i=0; i < textLength; i++){
//         if(s[substringIndex] === (s[s.length - substringIndex - 1]) & !isPalindrome){
//             isPalindrome = true;
//             substringIndex = i
//         }else if(s[substringIndex] !== (s[s.length - substringIndex - 1] )){
//             isPalindrome = false;
//             substringIndex = -1
//         }
//     }
//     return s.substring(substringIndex, (s.length-substringIndex))

// };

// console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("bb"))
// console.log(longestPalindrome("b"))

// var isPalindrome = function(x) {
//     let integertoString = x.toString();
//     let stringlen = integertoString.length % 2 === 0 ? integertoString.length/2 : ((integertoString.length - 1)/2)
//     if(x < 0){
//         return false;
//     }
//     for(let i =0; i < stringlen; i++){
//         if(integertoString[i] !== integertoString[integertoString.length-i - 1]) {
//             return false
//         }
//     }
//     return true
        
// };

var totalFruit = function(fruits) {
    
    let fruitOne = "";
    let fruitTwo = "";
    let count = 0;
    let total = 0;
    
    for(let i=0; i < fruits.length; i++){
            count = 0;
            fruitTwo = "";
            fruitOne = ""

        for(let j=i; j < fruits.length; j++){

           // console.log(fruitOne, fruitTwo, fruits[j], 'for each time')

            if (fruitOne === "" || fruitTwo === ""){
                fruitOne = fruits[j]
                count++
            }else if (fruits[j] !== fruitOne & fruitTwo === ""){
                fruitTwo = fruits[j]
                count++
            }else if (fruits[j] === fruitOne || fruits[j] === fruitTwo){
                count++
               
            }else if (fruits[j] !== fruitOne & fruits[j] !== fruitTwo){
                console.log('never here')
               
            }
            if (count > total){
                total = count;
        
            }
        }
    }
    
    return total;
    
};


// console.log(totalFruit([1,2,1]))
console.log(totalFruit([1,2,3,2,2]))
// console.log(isPalindrome(121))
//console.log(isPalindrome(1001))
// console.log(isPalindrome(12))