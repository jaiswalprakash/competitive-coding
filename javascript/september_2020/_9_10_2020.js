/*

This problem was asked by Amazon.

Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.

Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

Do this in O(N) time.

*/

// ---------------------------------naive solution time complexity O(N^2)------------------------------------//

function maxSum(arr) {
    var tempSum = 0;
    var tempSum2 = 0;
    var m = 1;

    for (j = 0; j < arr.length; j++) {
        tempSum = tempSum + arr[j];
    }

    for (k = 0; k < arr.length; k++) {

        for (i = m; i < arr.length; i++) {
            var tempSum2 = tempSum2 + arr[i];
        }
        console.log("temp2", tempSum2)
        if (tempSum2 > tempSum) {
            tempSum = tempSum2
        }
        tempSum2 = 0;
        m++
    }
    console.log("tempSum2", tempSum2);

    return tempSum;
}
//console.log("maxSum will be", maxSum([34, -50, 42, 14, -5, 86]));

// --------------------------O(N) time complexity---------------------------------//

function maxSum(arr) {
    if (arr.length == 0) return 0;
    var tempSum = 0;
    var tempSum2 = 0;

    for (j = 0; j < arr.length; j++) {
        tempSum = tempSum + arr[j];
    }
    var max = tempSum;
    for (i = 0; i < arr.length; i++) {
        tempSum2 = tempSum - arr[i];
        if (tempSum2 > max)
            max = tempSum2
        tempSum = tempSum2;
    }
    return max;
}

console.log("maxSum will be", maxSum([]));


function maxSequence(arr) {

    if (arr.length == -1) return 0;
    var max_so_far = arr[0];
    var curr_max = arr[0];

    for (var i = 1; i < arr.length; i++) {
        curr_max = Math.max(arr[i], curr_max + arr[i]);
        max_so_far = Math.max(max_so_far, curr_max);
    }
    return max_so_far;
}

console.log("maxSum will be", maxSequence([]));
