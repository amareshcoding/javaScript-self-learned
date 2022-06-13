
let num2;
console.log('num2: ', num2);
// const num3;
// console.log('num3: ', num3);

//Mathematical Operators
// + -> Add
// - -> Substract
// * -> Multiply
// / -> Dividion
// % -> Modulous


//Comparison Operator
// > -- Greater than
// < -- Lesser than
// == -- Equal without type check
// === -- Equal with type check
// >= -- Greater than equal without type check
// <= -- Lesser than equal without type check
// >== -- Greater than equal with type check
// <== -- Lesser than equal with type check

//Logical Operator
// && -- If both conditions are true
// || -- If any af the the condition is true

//Conditional Operator
if(true){
     console.log('if execution');
}else if(true){
     console.log('else if execution 1');
}else if(true){
     console.log('else if execution 2');
}else{
     console.log('else execution');
}

//Nested If condition
if(true){
     if(true){
          console.log('nested if execution 1');
     }else{
          console.log('nested if execution 2');
     }
}else{
     if(true){
          console.log('nested if execution 3');
     }else{
          console.log('nested if execution 4');
     }
}

//Ternary Operator
// Condition ? Execution1 : Execution2;
let num5 = 4;
let num6 = 6;

num5>num6 ? console.log(num5) : console.log(num6) ; 


//
let user;
// user = 'Amaresh';

console.log(user ?? "Guest User");


//Switch
let num7 = 2;
switch(num7){
     case 1:
          document.write('case 1');
          break;
     case 2:
          document.write('case 2');
          break;
     case 3:
          document.write('case 3');
          break;
     default:
          document.write('default');
}

//While Loop
let num8 = 10;
while(num8>0){
     console.log(num8--);
}

//Do While Loop
do{
     console.log('do while');
     num8++;
}while(num8<10);

//For Loops
for(let i = 0; i < 10; i++){
     console.log('for loop')
}

//break, continue
// break -- stop/terminate the loop
// continue -- skip a single itteration
for(let i = 0; i < 10; i++){
     if(i%2 == 0) continue;
     if(i == 7) break;
     console.log(`for loop ${i}`);
}

//Nested loop
for(let i=0; i<5; i++){
     for(let j=0; j<5; j++){
          console.log('nested loop')
     }
}


//alert
// alert('alert message');


// prompt
// let age = prompt('Enter your age')
// let age = prompt('Enter your age', 20);//default value is 20
// if(age != null) document.write(`Your age is ${age}`);
// else document.write(`Age field was blank`)


//confirn
// const res = confirm('Are you sure, You want to delete this product');
// if(res) document.write('Item deleted');
// else document.write('Your decesion saved');


//Functions
//User Define
//Parameter -->received value 
//Argument -->send at function-call
function newFunction(a,b){
     return a+b;
}
let num9 = 30;
let num10 = 40;
let res = newFunction(num9, num10);
console.log('res: ', res);


//variable function declaration
//Function expression
const varFunc = function(a, b){
     return a+b;
}
let res1 = varFunc(num9, num10);
console.log('res1: ', res1);


//Arrow function
const arrowFun = (a,b) =>{
     return a+b;
}
let res2 = varFunc(num9, num10);
console.log('res2: ', res2);


//Argument object
function argObjFun(){
     console.log(arguments.length);
     console.log(arguments);
     console.log(arguments[2]);
};
argObjFun(3,6,7);


//Anonymous Funtion
// function(){
// }

//Immediate Invoked Function
(function (){
     let num = 30;
     console.log('num: ', num);
     console.log('Invoked')
})();




//Inbuilt

//Math Properties
console.log(Math.PI);
console.log(Math.E);

//
console.log(Math.floor(6.8));
console.log(Math.round(4.5));
console.log(Math.ceil(7.3));
console.log(Math.trunc(4.5));
console.log(Math.pow(10,3));
console.log(Math.sqrt(25));
console.log(Math.cbrt(9));
console.log(Math.min(20,49));
console.log(Math.max(32,56));
console.log(Math.floor(Math.random()*10+1));
console.log(Math.floor(Math.random() * (25 - 15) + 15));



//Date 
const time = new Date();
console.log('time: ', time);

//create a date
const time1 = new Date(2018,10,4,10,33,12,5);
console.log('time1: ', time1);
time1.setDate(time1.getDate() + 50);
//

//methods
console.log(time.getDate());
console.log(time.getDay());
console.log(time.getFullYear());
console.log(time.getMonth());
