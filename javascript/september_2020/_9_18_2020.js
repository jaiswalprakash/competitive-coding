/*1.
Given n, take the sum of the digits of n. If that value has more than one digit,
 continue reducing in this way until a single-digit number is produced.
 This is only applicable to the natural numbers.
 Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  --> 1 + 1 = 2

 */

function digital_root(n) {
    if (n < 10) return n;
    digitSum = 0;
    while (n != 0) {
        digitSum = digitSum + n % 10;
        n = Math.trunc(n / 10);
    }
    if (digitSum > 9) {
        digital_root(digitSum)
    }
    return digitSum;
}

console.log(digital_root(1));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));
