/*
Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]
For the beginner, try to use the map method 
// works
*/

let map = function(arr){
// create a function that take in an array parameter
	let emptyArr = []; 
	for (let i = 0; i < arr.length; i++){
	// loop through the element of the array
	doubleArr =  arr[i] + arr[i] // this will take the element and double it. 
		emptyArr.push(doubleArr)
// take each element in the array to double
// now we push back into a new array with the new values. 
	}
// return each element of the array double
	console.log(emptyArr)
	return emptyArr
}


map([1,2,3,4,9,3]); 


