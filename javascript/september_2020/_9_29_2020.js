// count the number of vowel in the given string

function count(string) {
    var arr =string.toLowerCase().split("");
    var vowel=['a','e','i','o','u'];
    var v=0;
    for(i=0;i<arr.length;i++){
        if(vowel.includes(arr[i])){
          v++; 
        }
    }
    return v;
}

console.log(count("my name is khan"));