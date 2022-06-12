
let num2;
console.log('num2: ', num2);
// const num3;
// console.log('num3: ', num3);

// DATA TYPE
// 1) Primitive Data Type
//String
let str = 'hel\lo'//'hello' , "hello" , `hello` 
console.log('str: ', str);

//Number
let num4 = 55;
console.log('num4: ', num4);

//Boolen
let bol1 = true; //false
let bol2 = false/true; //0
let bol3 = true/false; //Infinity
console.log('bol: ', bol1);

//null
let nullValue = null;
console.log('nullValue: ', nullValue);

let nullValue1 = "";
console.log('nullValue1: ', nullValue1);


//undefined
let undefinedValue;
console.log('undefinedValue: ', undefinedValue);

let undefinedValue1 = undefined;
console.log('undefinedValue1: ', undefinedValue1);


//Infinity
let infinityValue = Infinity;
console.log('infinityValue: ', infinityValue);



//2) Abstract Data Type
//Array
let arr = [4,2,3,1,6,7];
console.log('arr: ', arr);

let arr1 = new Array(4);
console.log('arr1: ', arr1);


//Object
let obj = {
     name: "Amaresh",
     age:40,
};
console.log('obj: ', obj);

let obj1 = Object.create(null);
console.log('obj1: ', obj1);

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



//Data Type Conversion
//Number to String
let num9 = 10;
console.log('type of num9: ', typeof num9);
// num9 = num9.toString();
num9 = String(num9);
console.log('type of num9: ', typeof num9);


//String to Number
// let str2 = '50';
let str2 = 'hello';
console.log('type of str2: ', typeof str2);
str2 = Number(str2);
console.log('str2: ', str2);
console.log('type of str2: ', typeof str2);


//boolean to number
let bol4 = true;
bol4 = Number(bol4);
console.log('bol4: ', bol4); //1

let bol5 = false;
bol5 = Number(bol5);
console.log('bol5: ', bol5); //0

// number/string to boolean

let num10 = 0;
num10 = Boolean(num10);
console.log('num10: ', num10);

let num11 = 1;
num11 = Boolean(num11);
console.log('num11: ', num11);

let str3 = "";
str3 = Boolean(str3);
console.log('str3: ', str3);

let str4 = "hello";
str4 = Boolean(str4);
console.log('str4: ', str4);

//String Manipulation
let str5 = 'Amaresh \ Barik';
console.log('str5: ', str5);
let str6 = 'Amaresh \n Barik';
console.log('str6: ', str6);
let str7 = 'Amaresh \t Barik';
console.log('str7: ', str7);
let str8 = 'Amaresh \\ Barik';
console.log('str8: ', str8);

//Strings are emutable
let str9 = ' Amaresh Barik ';
console.log(str9[4]);
str[4] = 't';
console.log(str9[4]);

//Substring
let str10 = 'subString';
console.log(str10.substr(3,6))
console.log(str10.substring(2,5));

//String Methods
console.log(str10.indexOf('tr'));
console.log(str10.lastIndexOf('sub'));

console.log(str10.trim());
console.log(str10.split(''));

console.log(str10.toLowerCase());
console.log(str10.toUpperCase());

console.log(str10.replace('String' , 'Str'));
console.log(str10.includes('Str'));