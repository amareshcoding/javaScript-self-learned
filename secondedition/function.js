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


//Anonymous Funtion
// function(){
// }

//Immediate Invoked Function
(function (){
     let num = 30;
     console.log('num: ', num);
     console.log('Invoked')
})();


//Function inside function
function OutSider(){
     let name = '';
     const nameSet = (n)=>{
          name = n;
     }
}


//Argument object
function argObjFun(){
     console.log(arguments.length);
     console.log(arguments);
     console.log(arguments[2]);
};
argObjFun(3,6,7);


//Default parameters
function addTwo(a, b=0){
     return a + b; 
}
const ans =  addTwo(8);
console.log('ans: ', ans);// 8 + 0 --> 0


//rest parameters
function addMany(...arr){
     return arr.reduce((a,b) => a+b);
}
const ans1 = addMany(3,6,4,4,3,1);


//Param destructuring
const student = {
     name : 'Harshit',
     roll : '50CAA2022',
     subject : 'Mathematics',
}
function printStudent ({name, roll, subject}){
     console.log(name, roll, subject);
}
printStudent(student);








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
