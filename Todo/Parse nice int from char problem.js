/*Ask a small girl - "How old are you?". 
She always says strange things... Lets help her!

For correct answer program should return int from 0 to 9.

Assume test input string always valid and may look like 
"1 year old" or "5 years old", etc.. The first char is number only.

*/


function getAge(inputString){
// return correct age (int). Happy coding :) 

	if (inputString.charAt(0) === ["0","1","2","3"]){
		return true
	} else {
		return false 
	}

}

console.log(getAge("2"))





