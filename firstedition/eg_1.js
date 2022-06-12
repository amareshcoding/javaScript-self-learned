//Global Execution Context
//1. Creation Phase 
//i. window object, this = window
//ii. hoisting
//2. Code Execution Phase
//3. memory alocation
 
console.log(this);
console.log(window);
console.log(myFunc);
// console.log(myFunc1);//Error
console.log('name1: ', name1);

// console.log('name2: ', name2);//Error

// console.log('name3: ', name3);//Error


//function declaration store in GEC
function myFunc(){
     console.log('myFunc is called');
}
//function as a variable 
//behave same as variable
const myFunc1 = function (){
     console.log('myFunc1 is called');
}

//hoisting
//for variable in case of var the value is undefined
//in case of let and const the value is not initialised
var name1 = 'Amaresh';
let name2 = 'Amaresh';
const name3 = 'Amaresh';

// TDZ-temporal dead zone
//the temporary period between variable declaration and initialisation


//Execution context
//1. global 2. function


