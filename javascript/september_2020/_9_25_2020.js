
/*  1.write a function to get input as “hell0”  and return the total number of vowels?
 */
  
function vowel_count1(str1) {
    string = str1.toLowerCase();
    var vowel_list = 'aeiou';
    var count = 0;
 
    for (var x = 0; x < str1.length; x++) {
        if (vowel_list.indexOf(string[x]) !== -1) {
            count += 1;
        }
    }
    return count;
}

////---------------------------with regular expression----------------------------------------////


function vowel_count2(str1) {
   var exp=/[a,e,i,o,u]/ig
   return str1.match(exp).length;
}

console.log(vowel_count1("A quick brown fox "));

console.log(vowel_count2("A quick brown fox "));
