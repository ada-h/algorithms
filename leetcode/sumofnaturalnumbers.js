

function sumofnaturalnumbers(n){


    if(n === 0){
        return n
    }

    return n + sumofnaturalnumbers(n-1)
}

console.log(sumofnaturalnumbers(10))