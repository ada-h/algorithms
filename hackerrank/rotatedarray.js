
//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function rotLeft(a, d) {
    // Write your code here
    let rotatedarray = a
    if(a.length === 1 || d === a.length ){
        return rotatedarray
    }
    for(let i=0; i < d; i++){
        rotatedarray.push(rotatedarray[0])
        rotatedarray.shift()
    }
    return rotatedarray
}

// console.log(rotLeft([2,3], 5))
console.log(rotLeft([1,2,3,4,5], 4))