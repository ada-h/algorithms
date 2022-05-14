function association(array){
	let dict = new Map();
	for(let i = 0; i < array.length; i++){
	let itExists = dict.has(array[i][0])
    console.log(itExists, array[i], dict.get(array[i]) )
    // if(itExists){
    //     dict.set(array[i][0], dict.get(array[i][0].push(array[i][1])))
    // }else{
    //     dict.set(array[i][0],  [array[i][1]])
    // }
	
}
    return dict
}

console.log(association([{"a":1}, {"a":2}, {"a":2}, {"b":3}]))
