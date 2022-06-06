

function reverse(arr){
    
    if(arr.length === 1){
     return arr[0];
    }
    

   //console.log( arr, 'each')
    return[].concat(arr.pop(), reverse(arr));
    
}


console.log(reverse([1,2,3,4,5]));

