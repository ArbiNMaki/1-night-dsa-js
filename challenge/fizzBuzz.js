/**
 * 1. Print Numbers from 1 to N
 * 2. If Number is divisible by 3, print "Fizz"
 * 3. If Number is divisible by 5, print "Buzz"
 * 4. If Number is divisible by 3 and 5, print "FizzBuzz"
 * 5. Else, print the number
 */

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
        console.log(i);
    }
  }
};

fizzBuzz(20);
