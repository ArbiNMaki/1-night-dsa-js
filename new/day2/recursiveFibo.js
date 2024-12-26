function recursiveFibo(n) {
    if (n < 2) {
        return n;
    }

    return recursiveFibo(n - 1) + recursiveFibo(n - 2)
}

console.log(recursiveFibo(0));
console.log(recursiveFibo(1));
console.log(recursiveFibo(2));
console.log(recursiveFibo(3));
console.log(recursiveFibo(4));
console.log(recursiveFibo(5));
console.log(recursiveFibo(6));
console.log(recursiveFibo(7));
console.log(recursiveFibo(8));
console.log(recursiveFibo(9));
console.log(recursiveFibo(10));

// BigO - O(n) - Iterative
// BigO - O(2^n) - Recursive