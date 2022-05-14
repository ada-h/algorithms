


function decimaltobinary(decimal){
    if(decimal == 1){
        return 1;
    }
    return decimaltobinary(Math.floor(decimal/2)) + ""  + decimal % 2;
}

console.log(decimaltobinary(10))
console.log(decimaltobinary(233))