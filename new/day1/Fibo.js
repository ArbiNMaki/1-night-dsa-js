/** Problem
 * Give a number 'n', find the first 'n' elements of the Fibonacci Sequence
 *
 * In Math, the Fibonacci Sequence is a sequence in which each number is the sum of the two preceding ones.
 * The first two numbers in the sequence are 0 and 1.
 */

/** Example
 *
 * fibonacci(2) = [0, 1]  // (0, 1 adalah angka pertama dan kedua)
 * fibonacci(5) = [0, 1, 1, 2, 3]  // 0+1=1, 1+1=2, 1+2=3
 * fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]  // 3+5=8
 */

function fibonacci(n) {
    const fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(9));

// BigO - O(n)