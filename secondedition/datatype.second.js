// DATA TYPE
// 1) Primitive Data Type
//String
let str = 'hello'//'hello' , "hello" , `hello` 
console.log('str: ', typeof str);

//Number
let num4 = 55;
console.log('num4: ', typeof num4);

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



//2) Abstract Data Type
//Array
let arr = [4,2,3,1,6,7];
console.log('arr: ', arr);
console.log(arr.length);
console.log(arr[2]);

//Push/Pop -->
const popValue = arr.pop();
console.log('popValue: ', popValue);
arr.push(18);
console.log(arr);

//Shift/Unshift -->
const shiftValue = arr.shift();
console.log('shiftValue: ', shiftValue);
arr.unshift(23);
console.log(arr);

//Splice
arr.splice(2,1)
console.log('arr: ', arr);

//Join
arr.join(' ');
console.log('arr: ', arr);



//
// arr.length = 0;
// console.log('arr: ', arr);



//Multidimentional Array
let mat = [
     [1, 3, 5, 6],
     [4, 5, 7, 9],
     [2, 1, 7, 3]
];
//row = 3
//col = 4
console.log(mat[2][3]);

let arr1 = new Array(4);
console.log('arr1: ', arr1);

//Array iteration
for(let i = 0; i<arr.length; i++){
     console.log(arr[i]);
}








//Object
let obj = {
     name: "Amaresh",
     age:40,
};
console.log('obj: ', obj);

let obj1 = Object.create(null);
console.log('obj1: ', obj1);