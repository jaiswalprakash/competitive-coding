/*intersection_.intersection(*arrays)Computes the list of values that are the intersection 
of all the arrays. Each value in the result is present in each of 
the arrays._.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]); // variable number of arguments - in this its 3 but it 
can be 4, 5 and many more . 
output=> [1, 2]
code anyone? */


function intersection() {

    let arr = [];
    let answer = [];
    for (let i = 0; i < arguments.length; ++i) {
        arr.push(...arguments[i])
    }
    const lookUp = {};
    for (let i = 0; i < arr.length; i++) {
        let letter = arr[i];
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;
    }
    console.log(lookUp)

    let value = Object.keys(lookUp);
    console.log(value);

    for (let i = 0; i < value.length; i++) {
        if (lookUp[value[i]] === arguments.length) {
            answer.push(value[i]);
        }

    }
    return answer;
}

console.log(intersection([1, 2, 3], [101, 2, 1,3, 10], [2,3, 1]));


