/**
 * Problem
 * 
 * Give an integer 'n', find the factorial of that integer.
 * 
 * In Math, the factorial of a non-negative integer 'n', denoted n!, is the product of all prositive integers less than or equal to 'n'.
 */

/**
 * Example
 * 
 * factorial(3) = 3*2*1 = 9
 * factorial(5) = 5*4*3*2*1 = 120
 * factorial(7) = 7*6*5*4*3*2*1 = 5040
 */

function factorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result = result * i;
    }

    return result;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040

// BigO - O(n)
