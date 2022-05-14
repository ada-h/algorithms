
function binarySearch(arr, x, left, right){
    let left = 0;
    let right = arr.length;
    if(left > right){
        return -1;
    }
    let mid = (left + right) / 2;

    if(x == arr[mid]){
        return mid;
    }

    if(x > arr[mid]){
        return binarySearch(arr, x, left, mid - 1)
    }

    return binarySearch(arr, x, mid + 1, right )
}