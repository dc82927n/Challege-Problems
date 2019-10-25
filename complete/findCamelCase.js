

/*
catBird => cat catBird
*/




function findCamel(string){


          // find the camelCasing on the string then put a space between
         // let first split the string by using split but it changes the data type into a array
         // then loop over it and rebuild the string with the space after it finds
         // the camelCasing by using join method to put it back into a whole string


         let arr = string.split("") // c,a,m,e,l,C
    /*     console.log(arr)*/
         for (let i = 0; i < arr.length; i++){   // going through the split arr by character
            if( arr[i] === arr[i].toUpperCase()){
              arr[i] = " " + arr[i]
            }

          }
        console.log(arr.join(""))

    }


findCamel("camelCasing");
