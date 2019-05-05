/*
It's the academic year's end, fateful moment of your school report. 
The averages must be calculated. All the students come to you and entreat you
 to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

*/

/**//*
let rest = {
	a: 5,
	b: 9,

	check: function (){
		let c = this.b - this.a;
		console.log(c)
	} 
}


 d = rest.check()
 console.log(d)
//console.log(rest.check())*/




function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  
    // creating a variable num to keep track of the average 
    let num = 0 
  
    // given a parameter an array with grades.
    // loop each array of index value
    
    for(i = 0; i < marks.length; i++){
	//console.log(marks[i]/marks.length) ex. .0333 + 1. + 1.666 = 3 
   		num += marks[i] / marks.length ; // ex. [1,3,5] = 1+3+5 / 3 = 3 
    }
    
    // take the array and calulate the average and round down
    // then return the average 
  
    console.log(Math.floor(num)); 
  


// option 2

function getAverage(marks){

  // calculates total number of marks
  var total = 0;
  for(var i = 0; i < marks.length; i++){
    total += marks[i];
  }
  
  /* returns total number of marks divided by number of marks
     rounded down to nearest integer */
  return Math.floor(total / marks.length);
}

getAverage([1,3,5]); 

// option 3 

function getAverage (marks) {
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}

