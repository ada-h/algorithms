
function jumpingClouds (clouds){
    let numberofJumps = 0
    for(let i=0; i < clouds.length; i++){
        if(clouds[i + 2] == 0){         
            numberofJumps +=1
            i += 1
        }else if(clouds[i + 1] == 0){
            numberofJumps += 1           
        }
    }
    return numberofJumps
}
//console.log(jumpingClouds([0, 1, 0, 0,0, 1, 0]))
 console.log(jumpingClouds([0,0, 1, 0, 0, 1, 0]))