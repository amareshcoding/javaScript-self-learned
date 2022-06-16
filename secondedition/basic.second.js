
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
