let arr = [2, 7, 34, 89, 54, 42, 19];

//forEach
const forEachRes= arr.forEach(e => {
     console.log(e)
});


//Reduce
const reduceValue = arr.reduce((a,b) =>{
     return a+b;
})
console.log('reduceValue: ', reduceValue);



//Map
const mapValue = arr.map(e =>{
     return e*2;
});
console.log('mapValue: ', mapValue);


//filter
const filterValue = arr.filter(e =>{
     return e%2 == 0;
})
console.log('filterValue: ', filterValue);
