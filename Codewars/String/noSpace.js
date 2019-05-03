function countPositivesSumNegatives(input) {
let stor = [];
    let sum = 0; 
    let count = 0; 
    
    for (let i = 0; i < input.length; i++){
    	if (stor === null){
    		return 0 
    	}	if (input[i] < 0 ){
           sum += input[i]
        } if (input[i] > 0){
           count++
		} 
	}	
	
	stor.push(count, sum)
    console.log(stor);

}
countPositivesSumNegatives([1,2,3,4,8,-1,-2,-3,-4,-9])
