// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

var findWords = function (words) {
  let result = [];
  words.forEach(word => {
    let wordArray = word.toLowerCase().split("");
    
    rows.forEach(row => {
      let ticks = 0;
      wordArray.forEach(letter => {
        if (row.includes(letter)) {
          ticks++;
        }
      });
      if (ticks === word.length) result.push(word);
    });
  });
  return result;
};

findWords(["Hello", "Alaska", "Dad", "Peace"]);

//////







