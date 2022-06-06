// let board = 
// [["5","3",".",".","7",".",".",".","."],
// ["6",".",".","1","9","5",".",".","."],
// [".","9","8",".",".",".",".","6","."],
// ["8",".",".",".","6",".",".",".","3"],
// ["4",".",".","8",".","3",".",".","1"],
// ["7",".",".",".","2",".",".",".","6"],
// [".","6",".",".",".",".","2","8","."],
// [".",".",".","4","1","9",".",".","5"],
// [".",".",".",".","8",".",".","7","9"]]
// [["8","3",".",".","7",".",".",".","."],
// ["6",".",".","1","9","5",".",".","."],
// [".","9","8",".",".",".",".","6","."],
// ["8",".",".",".","6",".",".",".","3"],
// ["4",".",".","8",".","3",".",".","1"],
// ["7",".",".",".","2",".",".",".","6"],
// [".","6",".",".",".",".","2","8","."],
// [".",".",".","4","1","9",".",".","5"],
// [".",".",".",".","8",".",".","7","9"]]


// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
//  var isValidSudoku = function(board) {
//      console.log(board, 'i am bord')
    
//     cols = new Array(9).fill([]);
//     rows = new Array(9).fill([]);
//     grid = new Map(); //key = c/ 3, value = r/3
    
//     for(let i=0; i< board.length; i++){
//         for(let j=0; j < board[i].length; j++ ){
//             let gridrow = Math.floor(j/ 3);
//             let gridcol = Math.floor(i/ 3);
//              console.log(grid, 'i am the ')
//             if(board[i][j] != "."){
//                 if(cols[j].includes(board[i][j]) || rows[i].includes(board[i][j]) || ( grid.get([gridrow, gridcol]).includes(board[i][j])) ){
//                     return false
//                 }else{
                    
//                     cols[j] = [...cols[j], board[i][j]];
//                     rows[i] = [...rows[i], board[i][j]];
//                     grid.set([gridrow, gridcol], [... grid.get([gridrow, gridcol]), board[i][j]] )
//                 }
                
//             }
//         }
//     }
    
   
    
//     return true
// };

// console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],
// ["6",".",".","1","9","5",".",".","."],
// [".","9","8",".",".",".",".","6","."],
// ["8",".",".",".","6",".",".",".","3"],
// ["4",".",".","8",".","3",".",".","1"],
// ["7",".",".",".","2",".",".",".","6"],
// [".","6",".",".",".",".","2","8","."],
// [".",".",".","4","1","9",".",".","5"],
// [".",".",".",".","8",".",".","7","9"]]
// [["8","3",".",".","7",".",".",".","."],
// ["6",".",".","1","9","5",".",".","."],
// [".","9","8",".",".",".",".","6","."],
// ["8",".",".",".","6",".",".",".","3"],
// ["4",".",".","8",".","3",".",".","1"],
// ["7",".",".",".","2",".",".",".","6"],
// [".","6",".",".",".",".","2","8","."],
// [".",".",".","4","1","9",".",".","5"],
// [".",".",".",".","8",".",".","7","9"]]));

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    
    let sortedArray = nums.sort((a,b)=> a - b);
     let output = [];
     
 
     for(let i=0; i< sortedArray.length; i++){
         
         if(sortedArray[i] !== sortedArray[i-1]){
             
         let leftIndex = i + 1;
         let rightIndex = sortedArray.length - 1;
             
         while(leftIndex < rightIndex){
             let sum = sortedArray[i] + sortedArray[leftIndex] + sortedArray[rightIndex];
             if(sortedArray[leftIndex]  === sortedArray[leftIndex - 1] ){
                 leftIndex++;
             }else if(sum === 0){
                 output.push([sortedArray[i],sortedArray[leftIndex],sortedArray[rightIndex]])
             }else if(sum > 0){
                      rightIndex--;
             }else{
                 leftIndex++;
             }
         }
         }
 
         
     }
     
     return output;
     
     
 };