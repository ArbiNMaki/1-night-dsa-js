/**
 * 1. Convert Number to String (toString Method)
 * 2. Convert String to Array (Split Method)
 * 3. Reverse the String (Reverse Method)
 * 4. Convert Array back to String (Join Method)
 * 5. Convert String to Number (parseInt Method)
 * 6. Return the Number
 */

const reverseInteger = (n) => {
    const reversed = n.toString().split("").reverse().join("");
    return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInteger(12345));
console.log(reverseInteger(54321));