
// console.log("before");

// setTimeout(()=>{
//      console.log("inside");
// },1000);

// console.log("after");


console.log("before");

const id = setTimeout(()=>{
     console.log("inside");
},100);

clearTimeout(id);

console.log("after");

