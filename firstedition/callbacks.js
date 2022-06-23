//callback function

function addNums(a,b){
     return a+b;
}

function printFunc(callback, num1, num2){
     console.log(callback(num1, num2));
}

printFunc(addNums, 3, 5);


//
function firstFunc(name, clallBack){
     console.log(`Hello ${name}`)
     clallBack(name);
}

// function secondFunc(name){
//      console.log(`${name} how are you?`);
// }

// firstFunc("Aman", secondFunc);
firstFunc("Aman", function(calledName){
     console.log(`${calledName} how are you?`);
});