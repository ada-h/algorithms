function minimumBribes(q) {
    // Write your code here
    let numberofbribes = 0; 
    
    for(let i=0; i< q.length; i++){
        if(q[i] > q[i+2]){
            return "Too chaotic"
        }else if(q[i] - q[i + 1] == 2){
            numberofbribes += 2
        }else if(q[i] - q[i] == 1){
            numberofbribes += 1
        }
        return  numberofbribes === 0 ? null : numberofbribes
    }
    

}

console.log(minimumBribes([1]))
//console.log(minimumBribes([1,2,3,4,5,6,7,8]))
//console.log(minimumBribes([4,2,3,1,5,6,7,8]))