//setTimeOut

// console.log("before");

// setTimeout(()=>{
//      console.log("inside");
// },1000);

// console.log("after");


//clearTimeOut
// console.log("before");

// const id = setTimeout(()=>{
//      console.log("inside");
// },100);

// clearTimeout(id);

// console.log("after");


let hd1 = document.querySelector(".heading1");
let hd2 = document.querySelector(".heading2");
let hd3 = document.querySelector(".heading3");
let hd4 = document.querySelector(".heading4");

setTimeout(()=>{
     hd1.textContent = "Hi World";
     hd1.style.color = "red";
     setTimeout(()=>{
          hd2.textContent = "Hi World";
          hd2.style.color = "red";
          setTimeout(()=>{
               hd3.textContent = "Hi World";
               hd3.style.color = "red";
               setTimeout(()=>{
                    hd4.textContent = "Hi World";
                    hd4.style.color = "red";
               },2000)
          },2000)
     },2000)
},2000)
