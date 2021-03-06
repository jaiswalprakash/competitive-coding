/*
1.In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be alphabet characters only. Don't worry about lower and upper case. See test cases for more examples.
 */

function dup(s) {
    answer = [];
    for (i = 0; i < s.length; i++) {
        arr = s[i].split('');
        var ans = '';
        var pre = '';
        for (j = 0; j < arr.length; j++) {
            let nw = arr[j];
            if (pre === nw) continue;
            else {
                ans = ans + nw;
                pre = arr[j];
            }
        }
        answer.push(ans);
    }
    return answer;
};

console.log("answer", dup(["abracadabra","allottee","assessee"])); //["abracadabra","alote","asese"].
