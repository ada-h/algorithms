// function count(n){
//     if(n===0){
//         return 0;
//     }
//     console.log(n);
//     return count(n -1);
// }

//console.log(count(5))

function evenOrOdd(n){
    if(n === 0){
        return "Even";
    }
    if(n === 1){
        return "Odd"
    }
    return(evenOrOdd(n-2))
}

console.log(evenOrOdd(23));
console.log(evenOrOdd(12));