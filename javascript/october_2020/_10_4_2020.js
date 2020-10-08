/*
Write a function called repeat_str which repeats the given string src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

*/

function repeatStr (n, s) {
    var string='';
    for(i=0;i<n;i++)
        string=string+s;
    return string;
}

function repeatStr (n, s) {

    return s.repeat(n);
    
}


console.log(repeatStr (5, "Hello"))  