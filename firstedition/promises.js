//promise -> resolve or reject
// const response = false;

// const promiseToSelf = new Promise((resolve, reject)=>{
//      if(response){
//           resolve("promise resolved");
//      }else{
//           reject("promise rejected");
//      }
// })

// promiseToSelf.then((res)=>{
//      console.log(res);
// }).catch((err)=>{
//      console.log(new Error("costomised error message"))
// })

//its a async process
//stores in the call stack and event loop
//execute at the end of sync code

//then() always returns a promises

//promise chaining
const testPromise = new Promise((res, rej) => {
  res("hello");
});

testPromise
  .then((res) => {
    console.log("res: ", res);
    res += " World";
    return res;
  })
  .then((res) => {
    console.log("res: ", res);
    res += "!, How are you?";
    return res;
  })
  .then((res) => {
    console.log("res: ", res);
  });
