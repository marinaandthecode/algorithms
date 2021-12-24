// String Challenge (Coderbyte) 

// Have the function StringChallenge(str) read str which will be a string of roman numerals in decreasing order. The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000. Your program should return the same number given by str using a smaller set of roman numerals. For example: if str is "LLLXXXVVVV" this is 200, so your program should return CC because this is the shortest way to write 200 using the roman numeral system given above. If a string is given in its shortest form, just return that same string.
// Once your function is working, take the final output string and remove any characters (case-insensitive) from it that appear in your ChallengeToken. If the new final string is empty, return the string EMPTY.

// Your ChallengeToken: 2lr1akcyh9
// Examples
// Input: "XXXVVIIIIIIIIII"
// Output: L
// Final Output: EMPTY
// Input: "DDLL"
// Output: MC
// Final Output: M





function StringChallenge(str) { 

  // code goes here  

  const romanToNumeral = {
    "I" : 1, 
    "V" : 5, 
    "X" : 10, 
    "L" : 50, 
    "C" : 100, 
    "D" : 500, 
    "M" : 1000
  };

  let sum = str.split("").map(num => romanToNumeral[num]).reduce((total, num) => total + num);

  const numerals = Object.values(romanToNumeral);

  let newRomanArr = [];

  for (let i = numerals.length - 1; i >= 0; i--) {
    while (sum >= numerals[i]) {
      sum = sum - numerals[i]; 
      newRomanArr.push(numerals[i]);
      i--;
    }
  }

  let newRoman = newRomanArr.map(num => Object.keys(romanToNumeral).find(key => romanToNumeral[key] === num)).join("");

  let result = /[^2lr1akcyh9]/i.exec(newRoman);
  if (result === null) {
    return "EMPTY"
  } else {
    return result[0];
  }

}

//TODO:
// 1. split string
// 2. replace each roman with numeral (Object entries) 
// 3. reduce to sum 
// 4. divide until % = 0
// 5. regex for token 


// keep this function call here 
console.log(StringChallenge(readline()));

