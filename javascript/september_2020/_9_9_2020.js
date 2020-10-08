/*1.Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]*/

var number = function (array) {
    var result = [];
    if (array.length == -1) return result;
    else {
        for (i = 0; i < array.length; i++) {

            var value = `${i + 1}: ${array[i]}`
            result.push(value)

        }
        return result;
    }
}
console.log(number(["a", "b", "c"]));


