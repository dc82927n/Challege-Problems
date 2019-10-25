/*Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

 

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"*/


var defangIPaddr = function(address) { 
	// going to use a method replace method
	// we going to loop through the string charcters
	// after we identify . we going to use replace method "[.]" to replace the periods
	// word is going tor the results
	
	let result = ""

	for (let i = 0; i < address.length;i++){
		if(address[i] === "."){  // looping to check if it sees finds a "[.]"
		console.log(result += "[.]") // if it does add [.]
	} else  {
		result += address[i]; // otherwise add the original string of address into result 
	}
			// output look something like this check 1 then see . change to "[.]" ect. 
	}
	return result

};

defangIPaddr("1.1.1.1") 

//output:  1[.]1[.]1[.]

/*
solution 1 
var defangIPaddr = function(address) {
    return address.split('').reduce((acc,char)=>char==='.'?acc+'[.]':acc+char);
};
*/







