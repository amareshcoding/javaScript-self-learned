//closures

function outerFunction(){
     function innerFunction(){
          console.log("hello world");
     }
     return innerFunction;
}
// const res = outerFunction();
// res();


function printFullName(firstName, lastName){
     function printName(){
          console.log(firstName, lastName)
     }
     return printName;
}
const res1 = printFullName("Amaresh", "Barik");
console.log('res1: ', res1);
res1();


//when a nested function has the dependency on the variables declared in the parent function, then even after the execution of the parent function the variables not removed from the execution call stack
//that means when we call the nested or inner function the variables that declare in the parent function are accesible to the nested function 



function hello(c){
     const a = "a";
     const b = "b";
     return function(){
          console.log(a,b,c)
     } 
}
const res3 = hello("c");
console.log('res3: ', res3);
res3();
//in a nested function if the outer function return the inner function, in that case the inner function holds the variables of the outer/parent function

//Example 3
function powerFun(power){
     return function(num){
          return num ** power;
     }
}

const square = powerFun(2);
const cube = powerFun(3);

const ans = square(5);
console.log('ans: ', ans);
const ans1 = cube(5);
console.log('ans1: ', ans1);



//Example 4
function returnFunc(){
     let counter = 0;
     return function (){
          if(counter<1) {
               console.log("Hi I am called for first time");
               counter++;
          }else{
               console.log("Hey I am already claaed")
          }
     }
}
const callFunc = returnFunc();
callFunc();
callFunc();
callFunc();
const callFunc1 = returnFunc();
callFunc1();
callFunc1();










function printFullNameAgain(firstName, lastName){
     this.age = 25;
     this.printNameAgain = function(){
          console.log("Again",firstName, lastName, this.age)
     }
     // return printName;
}
const res2 = new printFullNameAgain("Amaresh", "Barik");
console.log('res2: ', res2);
res2.printNameAgain();
// res2();