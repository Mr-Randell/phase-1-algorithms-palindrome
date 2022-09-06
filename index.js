function isPalindrome(word) {
  // Write your algorithm here

  // Take input & reverse it, 
  const reversedInput = word.split("").reverse().join("");
  // if (input === reversed) then 
  return word == reversedInput;
  // return true 
  // else return false
}

/* 
  Add your pseudocode here
  Take input & reverse it, 
  if (input === reversed) then 
  return true 
  else return false
*/

/*
  Add written explanation of your solution here
  Understanding here is that we need to compare two words, a & b, to be the same whereby b is a word but in reverse

  Take input & reverse it, 
  if (input === reversed) then 
  return true 
  else return false

  Example:
  input = dad
  reversedInput = dad
  if (input == reversedInput) then return true otherwise false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
