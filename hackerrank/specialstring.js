function specialsubstring(string) {
    let dictionary = new Map();
    let count = 0;
    let middleCharacter = "";
    for (let i = 0; i < string.length; i++) {
        let characterExists = dictionary.has(string[i])
        if ((!characterExists & dictionary.size === 2) || (characterExists & string[i] == middleCharacter)) {
            let values = [...dictionary.values()]

            let sumofValues = values.reduce((a, b) => a + b)
            if (sumofValues > 1) {
                count++;
                middleCharacter = "";
            }
            dictionary.clear();
            dictionary.set(string[i], 1)
        } else if (!characterExists & dictionary.size === 1) {
            middleCharacter = string[i];
            dictionary.set(string[i], 1)
        } else if (!characterExists & dictionary.size === 0) {
            dictionary.set(string[i], 1)
        }else if(characterExists){
           count +=dictionary.get(string[i])
            dictionary.set(string[i], dictionary.get(string[i]) + 1)
        } else{
            dictionary.set(string[i], dictionary.get(string[i]) + 1)
        }
    } 
    return count + string.length
}

console.log(specialsubstring("iiioii"))
console.log(specialsubstring("mnonopoo"))
console.log(specialsubstring("asasd"))
console.log(specialsubstring("aaaa"))