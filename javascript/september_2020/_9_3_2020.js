/* 1.
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function (size) {
    var temArr = [];
    var answer = [];
    for (j = 1; j < size + 1; j++) {
        for (i = 1; i < size + 1; i++) {
            temArr.push(j * i);
        }
        answer.push(temArr)
        temArr = [];
    }
    return answer;
}
console.log(multiplicationTable(10));
