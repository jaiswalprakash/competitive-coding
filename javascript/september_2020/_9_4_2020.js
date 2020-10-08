/* 1. 
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

Test.assertEquals(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
    Test.assertEquals(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
    Test.assertEquals(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");

 */


function sumTwoSmallestNumbers(numbers) {
    function numberCompare(num1, num2) {
        return num1 - num2;
    }
    sorted = numbers.sort(numberCompare)
    return sorted[0] + sorted[1];
}
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])) //10
