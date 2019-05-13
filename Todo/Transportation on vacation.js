
/*
After a hard quarter in the office you decide to get some rest 
on a vacation. So you will book a flight for you and your girlfriend
 and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation.
 The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days,
 you get $50 off your total. Alternatively, if you rent the car for 3 or more days, 
 ou get $20 off your total.

Write a code that gives out the total amount for different days(d).

*/





function rentalCarCost(d) {
 

	// will have a function that take in days 
	let rentalCost = 40 
	// daily rental is $40 
	if (d >= 7){
		return (rentalCost * d) - 50 
	}
	// 7+ will get $50 off the total 
	else if (d >= 3){
		return (rentalCost * d) - 20 
	// 3+ days will get 20 off total
	} else {
		return d * rentalCost 
	}

	// return the total amount 

}



 rentalCarCost(7)






