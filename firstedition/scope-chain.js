//Scope
//Global Scope
let num = 10;

//Block Scope
{
     let num = 20;
}

//Local / Functional Scope
function localScope(){
     let num = 30;
}


// const b = "something";

// const printFunction = function(){
//      const a = "nothing";
//      console.log('a: ', a);
//      console.log('b: ', b);
// }
// printFunction();

// b present in the lexical environment of function(local) printFunction
//

//lexical environment

const a = "something";

const printFunction = function(){
     const a = "nothing";
     const innerPrint = function(){
          const a = 'everything';
          console.log('a: ', a);
     }
     console.log('a: ', a);
     innerPrint();
}
console.log('a: ', a);
printFunction();