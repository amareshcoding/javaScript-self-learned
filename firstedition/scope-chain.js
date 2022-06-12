// const b = "something";

// const printFunction = function(){
//      const a = "nothing";
//      console.log('a: ', a);
//      console.log('b: ', b);
// }
// printFunction();

// b present in the lexical environment of function(local) printFunction
//

const b = "something";

const printFunction = function(){
     const a = "nothing";
     const innerPrint = function(){
          console.log('a: ', a);
          console.log('b: ', b);
     }
     innerPrint();
}
printFunction();