let arr = [2, 7, 34, 89, 54, 42, 19];

//forEach
//iterate over the array and find the element and index
//doesn't return anything
const forEachRes= arr.forEach((e,i,arr) => {
     console.log(e, i);
});


//map
//iterate over the array and find the element and index
//return an array
const mapValue = arr.map((e,i,arr) =>{
     return e*i;
});
console.log('mapValue: ', mapValue);


//filter
//iterate over the array and find the element and index
//return an array
const filterValue = arr.filter(e =>{
     return e%2 == 0;
})
console.log('filterValue: ', filterValue);


//reduce
//return a single value
const reduceValue = arr.reduce((accumulator, currentvalue) =>{
     return accumulator + currentvalue;
})
console.log('reduceValue: ', reduceValue);
//accumulator     currentvalue      return
// 2                  7                9
// 9                  34               43
// 43                 89               132
// 132                54               186
// 186                42               228
// 228                19               247

const arr1 = [1, 2, 3];
const sum = arr1.reduce((accumulator, currentvalue) =>{
     return accumulator + currentvalue;
},100)
console.log('reduceValue: ', reduceValue);
//accumulator     currentvalue      return
// 100                 1              101
// 101                 2              103
// 103                 3              106


//sort

