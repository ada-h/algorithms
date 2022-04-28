// https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup


function sockMerchant(int, arr){
    let sock = new Map()
    let numberofpairs = 0
    for(let i=0; i < int; i++){
        if(sock.has(arr[i])){
            sock.delete(arr[i])
            numberofpairs +=1 
        }else{
            sock.set(arr[i], true)
        }
      
    }
    return numberofpairs
}

console.log(sockMerchant(7,[1,2,1,2,1,3,2]))