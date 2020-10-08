// write a function which will print the name u pass as an argument after 
//5 sec and 10sec


const myFunction = (name) => {
    console.log(name);
}

//setTimeout(myFunction,5*1000,"prakash");
//setTimeout(myFunction,5*1000,"pooja");

    //wrong 
// function hello(name){
//     console.log(name);
// }
// setTimeout(hello("prakash"),5*1000);


/* setInterval  */

setInterval(() => {
    console.log("hello");
}, 5*1000);


/* the code written in setImmediate function get executed after the execution of
all task in that page. means at last  */

setImmediate(()=>{
    console.log("hello");
})