//https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function countingValleys(steps, path){
    let currentPoint = 0
    let newArr = []
    let sealevel = 0
    let valleyCount = 0
    for(let i=0; i< steps; i++){
        if(path[i] === "D"){
            newArr.push(-1)
        }else{
            newArr.push(1)
        } 
    }

    for(let i=0; i < newArr.length; i++){
        currentPoint += newArr[i]
        console.log(currentPoint, 'i am here')
        if(currentPoint == sealevel){
            console.log(currentPoint, 'i a')
            if(newArr[i] > sealevel){
                valleyCount += 1
            }
        }
    }
    return valleyCount
}

console.log(countingValleys(8, ["U", "D", "D", "D", "U", "D", "U", "U"]))
//console.log(countingValleys(10, ["U", "D", "U", "U", "U", "D", "U", "D", "D", "D"]))