

/*Exclamation marks series #6: Remove n 
exclamation marks in the sentence from left to right

Description:

Remove n exclamation marks in the sentence from left to right. n is positive integer.
Examples

remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

*/


let remove = function(s, n){
	let count = 0; 
	let newStr = ""; 
	for(let i = 0; i < s.length; i++){
		if (s[i] === "!" && count < n){
			++count;
		} else {
			newStr += s[i]; 
		}
	}
	console.log(newStr)
	return newStr;
}

remove("!!!!!Hi !hi!!", 2)
/*function remove(s,n) {
 var a = s.split("!");
 a.unshift(a.splice(0,n+1).join(""));
 return a.join("!");
}
*/
/*function remove(s,n){
let str = '';
s.split('').forEach(elem=>{
  if(elem ==='!' && n>0){
    --n;
  }else{
    str += elem;
  }
});
  return str;
}*/


/*function remove(s,n) { 
  let count = 0; 
  let str = ""; 
  for (var i = 0; i < s.length; i++) { 
    if (s[i] === '!' && count < n) { 
    ++count; 
    } else { 
      str += s[i]; 
    } 
  } 
  
  return str; 
}

*/