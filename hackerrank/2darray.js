//https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function hourglass(arr){
    let hourglassSum = 0
    for(let i=0; i<arr.length; i++){
        
       
            hourglassSum+=arr[i]
     
    }
    return hourglassSum
}

// console.log(hourglass([1 1 1 0 0 0
//     0 1 0 0 0 0
//     1 1 1 0 0 0
//     0 0 2 4 4 0
//     0 0 0 2 0 0
//     0 0 1 2 4 0]))

console.log(hourglass([1, 1, 1, 1, 1 ,0,1, 1, 1 ]))