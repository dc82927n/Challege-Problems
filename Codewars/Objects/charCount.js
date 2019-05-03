// take in a string and return an object with the count of each character 



/*let charCount = function (str){
// create a function that is going to to take a string parameter
		
	let emptyObj = {}; // will need an empty object to store the data 
// loop through the function to count each element
	for (let i = 0; i < str.length; i++){
		//console.log(str[i])
		let char = str[i]; 
		if(emptyObj[char] > 0){
			emptyObj[char]++
		} else {
			emptyObj[char] = 1; 
		}
	}
// return object of each char count 
	console.log(emptyObj); 
}


charCount("helolol")
*/



let charCount = function (str){
	let emptyObj = {}; 

	for (let i = 0; i < str.length; i++){
		let char = str[i]; 
		if(emptyObj[char] === undefined) {
			emptyObj[char] = 1;
		} else {
			emptyObj[char]++;
		}
	}

	console.log(emptyObj); 
}

charCount("hellollolo")
















