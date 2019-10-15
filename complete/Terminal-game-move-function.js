

/*
Terminal game move function

In this game, the hero moves from left to right. The player rolls the 
dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position 
of the hero and the roll (1-6) and return the new position.
Example:*/


function move (position, roll) {
  // return the new position
  // create a variable to hold the total amount
  		//so roll get * 2 then add position for the total
  		// then return the total

  total	= (roll * 2) + position; 
  return(total); 

}

move(3, 6)



