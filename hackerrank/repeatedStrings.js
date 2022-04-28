
//https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function repeatedString(s, n){
    let count = 0;
    let repeatedtimes =  Math.floor(n / s.length);
    let extracharacters = n - (s.length * repeatedtimes)
    let extracount = 0
    for (let i=0; i < s.length; i++){
        if(s[i] === "a" ){
            count +=1
        }
    }

    for(let i=0; i < extracharacters; i++){
        if(s[i] === "a"){
            extracount +=1
        }
    }
   
    return (count * repeatedtimes) + extracount
}


 console.log(repeatedString("gfcaaaecbg", 547602))
 //console.log(repeatedString("abba", 7))
//console.log(repeatedString("abcac", 11))
