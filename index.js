
// Set(related to Array)
//it is iterable
//no-index
//unique element only
// const numbers = new Set([1,2,3,4]);
// const numbers = new Set([1,2,3,4,3,4]);

// const numbers = new Set();
// numbers.add(2);
// numbers.add(5);
// numbers.add(8);
// numbers.add(6);
// numbers.add(3);
// numbers.add(1);

// console.log('numbers: ', numbers);
// console.log(numbers.has(5));
// console.log(numbers.has(4));

// let length = 0;
// for(let number of numbers){
//      console.log(number);
//      length++;
// }


//Map(related to object)
//iterable
//index based
// let person = new Map([['lastname', 'barik'],['company','masai']]);
// // let person = new Map();
// person.set('firstname', 'Amaresh');
// person.set('age', 10);
// person.set('city', 'bangalore');


// console.log('person: ', person);

// console.log(person.get('firstname'));

// console.log(person.keys());
// for(let key of person.keys()){
//      console.log(key);
// }

// for(let [key, value] of person){
//      console.log(key + "-" + value);
// }



//Object Assign
// const obj = {
//      key1 : 'value1',
//      key2 : 'value2',
// }

// const obj2 = {...obj};
// obj.key3 = 'value3';
// console.log('obj2: ', obj2);

// const obj3 = Object.assign({}, obj);
// // obj3.key3 = 'value3';
// console.log('obj3: ', obj3);


//Optional Chaining
// const user = {
//      firstName : 'Amaresh',
//      // address : {city: 'bangalore'}
// }

// console.log(user?.firstName);
// console.log(user?.address?.city);



//Constructor function
// function CreateUser(fn, ln, eml, age){
//      this.firstName = fn;
//      this.lastName = ln;
//      this.email = eml;
//      this.age = age;
// }

// CreateUser.prototype.about = function(){
//      return `${this.firstName} ${this.lastName} has mail id ${this.email} and is ${this.age} old`;
// }

// const user1 = new CreateUser("Amaresh", "Barik", "abc@gmail.com", 40);
// console.log('user1: ', user1);
// console.log('about: ', user1.about());
// console.log(Object.getPrototypeOf(user1));



//Class
// class CreateUser{
//      constructor(fn, ln, eml, age){
//           this.firstName = fn;
//           this.lastName = ln;
//           this.email = eml;
//           this.age = age;
//      }
//      about(){
//           return `${this.firstName} ${this.lastName} has mail id ${this.email} and is ${this.age} old`;
//      }
// }
// const user1 = new CreateUser("Amaresh", "Barik", "abc@gmail.com", 40);
// console.log('user1: ', user1);
// console.log('about: ', user1.about());


// class extends keyword
// class Animal{
//      constructor(){
//           this.type = 'animal';
//           this.nature = 'wild';
//      }
//      about(name){
//           return `${name} is a ${this.nature} ${this.type}`;
//      }
//      isWild(){
//           return true;
//      }
//      //this is act as properties not like methods
//      //getter
//      get whatColor(){
//           return this.color;
//      }
//      //setter
//      addProperties(speed){
//           this.speed = speed;
//      }
//      //static methods work on class leble
//      static classInfo(){
//           return 'this is a Animal class'
//      }
//      //static properties
//      static newProperty = 'static property';
// }

// const Animal1 = new Animal();
// console.log('Animal1: ', Animal1);
// console.log(Animal1.about("Tiger"));
// console.log(Animal.classInfo());



// //sub class, derive class
// class Lion extends Animal{
//      constructor(color){
//           super();
//           this.color = color;
//      }
// }

// const Lion1 = new Lion("yellow");
// console.log('Lion1: ', Lion1);
// console.log(Lion1.about("Lion"));



//Js compailation
//1. cleaning
//2. Lexer/Tokenizer
//3. Parcer
//4. Operations/ Code generater


//Global Execution Context
//1. Creation Phase 
//i. window object, this = window
//ii. hoisting
//Code Execution Phase
 

//window is the global object in Js

//Js-> a Syncronous Programing Language/single thread
//browser provide the Asyncronous features


//















// git fetch origin
// git checkout 5-adding-odia-language

