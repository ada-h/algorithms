

function mergeArray(left, right){

    let sortedArr = [];
    while(left[0] && right[0]){
        if(left < right){
            sortedArr.push(left.shift());
        }else{
            sortedArr.push(right.shift());
        }
    }

    return [...sortedArr, ...left, ...right]
    
}

function mergeSort(arr){
    let half = Math.floor(arr.length/2);
    if(arr.length <= 1){
        return arr
    }
    let left = arr.slice(0, half);
    let right = arr.slice(half);
    return mergeArray(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([1, 5,4 ,3]));
console.log( mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
//console.log(mergeArray([3,6],[4,5]))