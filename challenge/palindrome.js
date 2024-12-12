/**
 * 1. Convert String to Array
 * 2. Reverse the Array
 * 3. Convert Array back to String
 * 4. Compare String
 */

const palindrome = (str) => str.split("").reverse().join("") == str;

console.log(palindrome("abba"));
console.log(palindrome("apa"));
console.log(palindrome("none"));
