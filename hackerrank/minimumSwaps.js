// function minimumSwaps(arr) {
//     let swapCount = 0;
//    for(let i=0; i< arr.length; i++){
//        for(let j=0; j < arr.length - 1; j++){
//            if(arr[j] > arr[j+1]){
//                let temp = arr[j + 1];
//                arr[j+1] = arr[j];
//                arr[j] = temp;
//                swapCount++
//            }
//        }
//    }
//    return swapCount;
// }


var findMedianSortedArrays = function(nums1, nums2) {
    
    let totalLength = nums1.length + nums2.length;
    let mergedArray = [];
    let middle = totalLength % 2 === 0 ? (totalLength/2) : (totalLength - 1) / 2; 
    let median = 0;
    
    while(nums1 && nums2){
        if(nums1[0] > nums2[0]){
            mergedArray.push(nums2.shift());
            
        }else{
            mergedArray.push(nums1.shift());
        }
    }
    
    mergedArray = [...mergedArray, ...nums1, ...nums2]
    
    median = totalLength % 2 === 0 ? ((mergedArray[middle] + mergedArray[middle + 1]) / 2) : mergedArray[middle]
    
    return median;
    
};

function joinedLogger(level, sep) {
    // write your code here
    
  
    function f (msg){ 
        console.log(msg)
          let output = "";
        for(let i=0; i < msg.length; i++){
            if(msg[i].level <= level){
                output += message + sep
            }
        }
        return output
    }
    return f(msg)
  }