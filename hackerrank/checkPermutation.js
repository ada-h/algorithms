
function checkpermutation(firststring, secondstring){
    let f = firststring.replace(/\s/g, '');
    let s = secondstring.replace(/\s/g, '')
    let secondstringCharacters = [...s]
    if(f.length !== s.length){
        return false
    }
    for(let i=0; i < secondstringCharacters.length; i++){
        if(!secondstringCharacters.includes(f[i])){
            return false
        }
    }
    return true
}

console.log(checkpermutation("abba", "acca"))
console.log(checkpermutation("ab  ba", "aabb"))
console.log(checkpermutation("abbacd", "aabb"))