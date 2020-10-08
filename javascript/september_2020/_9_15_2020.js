/*1.
ISBN-10 identifiers are ten digits. The first nine digits are on the range 0 to 9. The last digit can be either on the range 0 to 9 or the letter 'X' used to indicate a value of 10.

For an ISBN-10 to be valid, the sum of the digits multiplied by their position has to equal zero modulo 11. For example, the ISBN-10: 1112223339 is valid because:

(((1*1)+(1*2)+(1*3)+(2*4)+(2*5)+(2*6)+(3*7)+(3*8)+(3*9)+(9*10)) % 11) == 0
Complete the validISBN10() function.

validISBN10('1112223339') ; should return true
validISBN10('1234554321') ; should return true
validISBN10('1234512345') ; should return false

    ["1112223339", true ],
    ["048665088X", true ],
    ["1293000000", true ],
    ["1234554321", true ],
    ["1234512345", false],
    ["1293"      , false],
    ["X123456788", false],
    ["ABCDEFGHIJ", false],
    ["XXXXXXXXXX", false]
 */



function validISBN10(isbn) {
    var arr = isbn.split("");
    if (arr.length < 10) return false;
    var sum = 0;
    if (arr[9] === 'X') {
        // sum = sum + 100;
        // arr.pop();
        arr[9] = 10;
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
            return false
        }
        sum = sum + arr[i] * (i + 1);
    }
    if (sum % 11 == 0) return true;
    else {
        return false
    }
}

//console.log(validISBN10("1234512345"));

