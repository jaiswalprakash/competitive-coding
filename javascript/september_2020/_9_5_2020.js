/*4.
Write

function smaller(arr){

}

that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

For example:

smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
smaller([1, 2, 0]) === [1, 1, 0]

  Test.assertSimilar(smaller([1, 2, 0]), [1, 1, 0]);
    Test.assertSimilar(smaller([1, 2, 1]), [0, 1, 0]);
    Test.assertSimilar(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
    Test.assertSimilar(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);

*/

function smaller(arr) {
    var result = [];
    var count = 0;
    for (i = 0; i < arr.length; i++) {
        var key = arr[i];
        for (j = i + 1; j < arr.length; j++)
            if (arr[j] < key) count = count + 1
        result.push(count);
        count = 0;
    }
    return result;
}
console.log(smaller([1, 2, 1])) //, [1, 1, 0]