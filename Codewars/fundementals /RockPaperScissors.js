
/*

Rock Paper Scissors
Let's play! You have to return which player
 won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

*/



const rps = (p1, p2) => {
  if (p1 === p2){
    return "draw" 
  } else if (p1 === "scissors" && p2 === "rock"){
    return "player 2 won!"
  }
 else if (p1 === "paper" && p2 === "scissors"){
    return "player 2 won!" 
  } else if (p1 === "rock" && p2 === "paper"){
    return "player 2 won!"
  } else {
    return "player 1 won!"
	}
}
 let p = rps("scissors", "scissors")
console.log(p)
