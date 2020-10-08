/*Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

*/

////-----------------with regular expression---------------------////

function cleanString(s) {
    let str = s;
    while (str.includes("#")===true){
    var exp = /[a-z]#/g;
    var answer = str.replace(exp, '');
    str=answer;
    }
    return answer;
};


////--------------------with out regular expression------------------ time complexity is o(n)-//

function cleanString(s) {
    var arr = s.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == '#') {
            arr.splice(i - 1, 2); // at position i-1 remove 2 element;
            i = i - 2;
        }
    }
    return arr.toString(',').replace(',', '');
}

console.log(cleanString("abc#d##c"));