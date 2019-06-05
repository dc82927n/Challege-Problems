/*Given a non-empty array of integers, 
return the result of multiplying the values together in order. Example:



[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


*/

// need to loop through the array and each element
// i * i then add to count, will get sum . 

function grow(x){
	let count = 0; // 
	let total = 1;
	for (let i = 0; i < x.length; i++){
		//count = x[i] //  
		total *= x[i]  // => 1 * 2 = 2 
							// 2 * 3 = 6 + 2
	}

	console.log(total);
}

grow([4,1,1,1,4])




