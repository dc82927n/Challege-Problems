function countPositivesSumNegatives(input) {
let stor = [];
    let sum = 0; 
    let count = 0; 
    
    //console.log(input.length)

    if (input.length < 1){
     
        return input
    }
    
    for (let i = 0; i < input.length; i++){
    		if (input[i] < 0 ){
           sum += input[i]
        } if (input[i] > 0){
           count++
		    }
    }
    
	stor.push(count, sum)

  //console.log(stor)
  return stor

  
}

countPositivesSumNegatives([])















