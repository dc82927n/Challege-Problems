/*Create a method sayHello/say_hello/SayHello 
that takes as input a name, city, and state to welcome a 
person. Note that name will be an array consisting of one or
more values that should be joined together with one space
betweeen each, and the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')

This example will return the string Hello, 
John Smith! Welcome to Phoenix, Arizona!*/


let sayHello = function(name, city, state){
	console.log(`Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`)
  
// John Smith! Welcome to Phoenix, Arizona!

}




sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
