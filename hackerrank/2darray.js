//https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function hourglass(arr){
    let hourglassCount = []
    
    for(let row=0; row <= 3; row++){
        
        for(let col = 0; col <= 3; col++){
            let sum = 0
            sum += arr[row][col];
            sum += arr[row][col + 1];
            sum += arr[row][col + 2];
            sum += arr[row + 1][col + 1];
            sum += arr[row + 2][col];
            sum += arr[row + 2][col + 1];
            sum += arr[row + 2][col + 2];
            hourglassCount.push(sum)
        }
     
    }
    return Math.max(...hourglassCount)
}

console.log(hourglass([[1, 1, 1, 0, 0 ,0],
   [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0], [ 0, 0, 1, 2, 4, 0],]))