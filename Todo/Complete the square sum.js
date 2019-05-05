/* 5.3.19 Complete the square sum method so that 
it squares each number passed into it and then sums 
the results together.

For example: squareSum([1, 2, 2]) should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/


// create a fucntion that takes in a paramerter

let squareSum = function (num){
	 sum = 0; 
// that is going to loop though the array of int. 
	num.forEach(function(num){

		sum += num * num

	});

// find the square and return the total
	console.log(sum)

}

squareSum([1, 2, 2])