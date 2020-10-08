/*1.
Your task is to create a function called sum_arrays() in Python or addArrays in Javascript, which takes two arrays
consisting of integers, and returns the sum of those two arrays.

The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' 
converted to an integer for this kata, meaning it would equal 329. The output should be an array of the the sum in a 
similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]). Examples are given below of what 
two arrays should return.

 */

function addArrays(array1, array2) {
    var array3 = [];
    let arrayToNumber1 = parseInt(array1.join(''));
    let arrayToNumber2 = parseInt(array2.join(''));
    num = arrayToNumber1 + arrayToNumber2;
    while (num != 0) {
        array3.push(num % 10);
        num = Math.trunc(num / 10);
    }
    return array3.reverse();

}

console.log(addArrays([6, 7], [6, 7]));