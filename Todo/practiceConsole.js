


/*
notes = [1,2,3,4,5,6,7]
 a = notes.splice(1,0,"hello")
console.log(a)


*/

// let string = ["hello", "world"];
// string.forEach(function(string){
//     console.log(string)

// });


/*
 let string = ["hello", "world"]
string.forEach(function(item, index){
    console.log(item)
    console.log(index)

});
*/

/*
output ==>
hello
0
world
1
*/
 let string = ["hello", "world"]

 for(let i = 0; i < string.length; i++){
    console.log(string) 

    /*output => 
    ["hello", "world"]
    ["hello", "world"]
    */

}

for(let i = 0; i < string.length; i++){
    console.log(string[i])

    /*output
    hello
    world
    */

}

for(let i = 0; i < string.length; i++){
    console.log(i)

    /*
    0
    1
    */


}





