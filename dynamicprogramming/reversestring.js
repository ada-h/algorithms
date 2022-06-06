
function reverseString(str){
    if(str.length === 1){
        return str[0]
    }
    return str.substring(str.length - 1) + reverseString(str.substring(0, str.length - 1))
}

console.log(reverseString('freeCodeCamp')) 