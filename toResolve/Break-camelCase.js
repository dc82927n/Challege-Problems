



/*Complete the solution so that the function will break
up camel casing, using a space between words.
Example

solution('camelCasing') // => should return 'camel Casing'
*/

/*function solution(string) {
    if(string === charAt(0).uppercase()){
      console.log()
    }
        // need to loop through each character then
        // when it finds the uppercase character



}
*/
/*

function solution(string) {
  var splitCamel = string.replace(/[A-Z]/g," $&")
  console.log(splitCamel)
}

solution('camelCasing')


solution('theCowJumpedOverTheMoon')

*/


function solution(string) {
  var arr = string.split("");
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if(arr[i] === arr[i].toUpperCase()) {
      console.log(arr[i]);
      arr[i] = " " + arr[i];
    }
  }
  return arr.join("");
}



console.log(solution("bamelIasing"));


  /*
  function solution(string) {
    var splitCamel = string.replace(/[A-Z]/g," $&")
    console.log(splitCamel)
  }

  solution('camelCasing')


  solution('theCowJumpedOverTheMoon')*/
