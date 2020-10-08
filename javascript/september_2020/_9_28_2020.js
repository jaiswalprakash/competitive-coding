/* 

    Your task is to sort a given string. Each word in the string will contain a single number. 
       This number is the position the word should have in the result.

    Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

*/

function order(words) {
    var string = words;
    var arr = string.split(" ");
    var numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    var final = [];
    for (i = 0; i < numArray.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j].includes(numArray[i])) {
                final.push(arr[j]);
            }
        };

    };
    console.log(final.join(" "));


}

order("is1 Thi1s T4est 3a");