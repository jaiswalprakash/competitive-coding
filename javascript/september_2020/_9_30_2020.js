/*

The first input array is the key to the correct answers to an exam, like ["a", "a",
"b", "d"]. The second one contains a student's submitted answers.
The two arrays are not empty and are the same length. Return the score for this
array of answers, giving +4 for each correct answer, -1 for each incorrect answer,
and +0 for each blank answer, represented as an empty string (in C the space
character is used). If the score < 0, return 0.
Input                      Output
["a", "a", "b", "b"]
["a", "c", "b", "d"]        6

["b", "c", "b", "a"]        0
["", "a", "a", "c"]

 */


function calScore(answer, studentAns) {
    var Score = 0;
    for (i = 0; i < answer.length; i++) {

        if (studentAns[i] == "") 
            Score = Score + 0
        else if (answer[i] == studentAns[i]) 
            Score = Score + 4
        else 
            Score = Score - 1
    }
    if (Score < 0) 
       return 0;
    return Score;
}

var answer = ["b", "c", "b", "a"];
var studentAns = ["", "b", "a", "b"];

console.log(calScore(answer,studentAns));

