/**
 * 1. Convert String to Array (Split Method)
 * 2. Reverse the Array (Reverse Method)
 * 3. Convert Array back to String (Join Method)
 */

const reverseString = (str) => str.split("").reverse().join("");

console.log(reverseString("hello"));
console.log(reverseString("olleh"));