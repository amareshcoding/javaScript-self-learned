//By value vs By reference
// 1) By value
let num  = 10;
let num1 = num;
num1++;
console.log('num: ', num);
console.log('num1: ', num1);

let str = 'string';
let str1 = str;
str1 = 'replaced';
console.log('str: ', str);
console.log('str1: ', str1);


//2)By reference
let arr = [5,7,8];
let arr1 = arr;
arr1[1] = 9;
console.log('arr: ', arr);
console.log('arr1: ', arr1);

let obj = {
     username:'abcdefgh',
     mail:'abc@gmail.com',
}
let obj1 = obj;
obj1.pass = '12345678';
console.log('obj: ', obj);
console.log('obj1: ', obj1);


//copy an array
let arr2 = [...arr]; //spread operator
arr2[0] = 28;
console.log('arr: ', arr);
console.log('arr2: ', arr2);

let arr3 = arr.slice(0);
arr3.push(33);
console.log('arr: ', arr);
console.log('arr3: ', arr3);

let arr4 = [].concat(arr);
console.log('arr4: ', arr4);

const chars = [...'abcdefghijklmnopqrstuvwxyz'];
console.log('chars: ', chars);

//Copy of an Obj
const person = {
     firstName: 'Amaresh',
     lastName: 'Barik',
}

const {...restProps} = person;
console.log('restProps: ', restProps);

const newObj = {...person};
console.log('newObj: ', newObj);



