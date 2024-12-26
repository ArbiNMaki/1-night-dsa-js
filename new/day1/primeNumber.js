/**
 * Problem
 * 
 * Give a natural number 'n', determine if the number is prime or not
 * 
 * A prime number is a natural number greater than 1 that isn't a product of two smaller natural numbers.
 */

/**
 * Example
 * 
 * isPrime(5) = true (1*5 or 5*1)
 * isPrime(4) = false (1*4 or 2*2 or 4*1)
 * 
 * isPrime(11) = true (1*11 or 11*1)
 * isPrime(16) = false (1*16 or 2*8 or 4*4 or 8*2 or 16*1)
 */

function primeNumber(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(primeNumber(5)); // True
console.log(primeNumber(8)); // False
console.log(primeNumber(16)); // False
console.log(primeNumber(11)); // True
console.log("===============");
console.log(primeNumber(11.99)); // True
console.log(primeNumber(12)); // False

// BigO - O(sqrt(n))