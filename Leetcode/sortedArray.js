// sqaure the array then sort it. 


let A = [-4,-1,0,3,10];
//A.sort();
	//console.log(A)

var sortedSquares = function() {
	let squard =[];
	
	//let empty = [] 
	//c = [];

   //let sorted = A.sort(); 
   for (let i = 0; i < A.length; i++){
   		squard.push(A[i] * A[i])
   		
   		//console.log(squard)
   		//squard.sort();
		//let c = squard.sort();
		//console.log(c)
		squard.sort(function(a,b) {
			return a - b;
		});
		console.log(squard)
   }
    
 		  	
}

console.log(['hi', 'bye', 'q', 'k', 'y', 1, 10, 5, "!", "#", ")"].sort());



 
sortedSquares()









