/*1.
Given a mathematical equation that has *,+,-,/, reverse it as follows:

solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"
*/

function solve(eq){
//     var solution=''
//    for(i=eq.length;i>0;i--){
//      var  solution= solution +eq[i]
//    }
//    return solution;
//var ar = splitMulti('eq', ['*', '+','-','/']) // ["a", "b", "c", "d"]
var ar=eq.split(['*', '+','-','/']);
return ar;
}
console.log(solve("a+b-c/d*30"));

// not able to solve//