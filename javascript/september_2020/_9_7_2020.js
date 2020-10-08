/*1.For this Kata you will have to forget how to add two numbers together.

The best explanation on what to do for this kata is this meme:

  248
+ 208
= 4416


In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

*/

function add(num1, num2) {

    var answer = '';
    if (num1 == 0 && num2 == 0) return num1 + num2;
    while (num1 != 0 || num2 != 0) {
        a = num1 % 10;
        b = num2 % 10;
        var c = `${a + b}`;
        answer = c + answer;
        num1 = Math.trunc(num1 / 10);
        num2 = Math.trunc(num2 / 10);
    }
    return parseInt(answer);
}

console.log(add(0, 0));