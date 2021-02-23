<<<<<<< HEAD
// // // variables
// let y = 20
// const z = 50.0
//
// let name = 'Abdulahi'
// let numbers = [1, 2, 3, 4, 5, 6]
// let student = {
//     name: 'Abdulahi',
//     age: 100,
//     gender: 'Male'
// }
// console.log(typeof numbers)
//
// y = y + 10;
// // console.log(x,y,z)
//
// //the as c++ and java +,- , / . %
// //if else , do , for , do-while , switch
// for (let i = 0; i < ; i++) {
//
// }

//Functions

// function display() {
//     console.log('Hello from the function')
// }
//
// display()

// function add(x , y){
//     return x + y
// }
// function mult(x , y){
//     return x * y
// }
//
// let x = 10;
// let y = 20;
//
// const result = add(x,y)
// const result2 = mult(x,y)
//
// console.log(x, '+' , y , '=' , result)
// console.log(x, '*' , y , '=' , result2)

//Passing function (first class citizens)

// let x = 10;
//
// let add = function (x, y) {
//     return x + y
// }
// let mult = function(x , y){
//     return x * y
// }
//
// function multiplyAndAdd(x, y , add1 , mult1){
//     let m = add1(x , y);
//     let a = mult1(x , y);
//     console.log(m , a)
// }
//
// multiplyAndAdd(2,3,add ,mult)


// let display1 = function(result){
//     console.log('The result is', result)
// }
// let display2 = function(result , x , y){
//     console.log(x , y , result)
// }
// let display3 = function(result){
//     console.log('The calculated result is ' , result)
// }
//
// function addAndDisplay(x , y, callback){
//     const result = x + y;
//     callback(result , x , y)
// }
//
// addAndDisplay(4,5, display1)
// addAndDisplay(4,5, display2)
// addAndDisplay(4,5, display3)

//
// let display1 = function(result){
//     console.log('The result is', result)
// }
// let display2 = function(result , x , y){
//     console.log(x , y , result)
// }
//

// function addAndDisplay(x, y, callback) {
//     const result = x + y;
//     callback(result)
// }
//
// addAndDisplay(10, 20, result => console.log('The calculated result is ', result))
//
// function add(x, y) {
//     return x + y
// }
//
// function square(x) {
//     return x ** 2
// }
//


// //arrow functions
// function display(result) {
//     console.log('The calculated result is ', result)
// }
//
// //reduce it
// result => console.log('The calculated result is ', result)


// const mixed = [1, 2, 3, 4, 'text', 'other tex']
// const cmixed = [1, 2, 3, 4, 'text', 'other tex', [1, 2, 3, 4, 5]]
//
// // function display(x){
// //     console.log(x)
// // }
// // numbers.forEach(display)
//
// numbers.forEach(x => console.log(x ** 2))
//
// //sort

const numbers = [11, 22, 13, 41, 15, 6]
numbers.forEach(function (x){
    console.log(x)
})
numbers.forEach( x=> console.log(x))
numbers.sort()  // -1 1 0
console.log('sorted' , numbers)

const mappedArray = numbers.map(x => x ** 2)
console.log('squared ' , mappedArray)

const max = mappedArray.reduce((acc , x)=>acc > x ? acc : x)
console.log('max ' , max)


let names =  [ 'Abdulahi', 'Ahmed', 'Omar', 'ahmed' ]

names.sort((x,y)=> x.localeCompare(y))  //-1 : 0 or 1
console.log(names)




=======
//display something on the screen
console.error('This is error message')
// console.log('This is a log message')
// console.table([1,2,3,4,5])

//declare variables [let, const , var] JAVA=>[String, float , int , double ....]
//object , numbers , String
// let x = 'hello welcome to JS world'
// const y = 20
// let z = 50

// var x =10;
// var y = 'Abdulahi'
// var z = [1,2,3,4,5]
// var w = {name : 'Abdulahi'}

// let x = 10;
// let y =10
// y++;
//
// console.log(y)  //40? 55?

// how to declare a function
// let x = 55;

// function add(a , b){
//     return a + b
// }
//
// let result = add (4,5)
// console.log(result)
//
// let result2 = add ('Abdulahi ','Hassen')
// console.log(result2)

//functions are first class citizens

// let add = function (a, b) {
//     return a + b
// }
//
// function multiply(a, b) {
//     return a * b
// }
//
// function division(a, b) {
//     return a / b
// }
//
// //because it takes a function as a parameter
// function display(x, y, anotherFunction) {
//     let result = anotherFunction(x, y)
//     console.log(result)
// }
//
// display(44, 55, function (a, b) {return a + b})
// display(44, 55, add)
// display(44, 55, multiply)
// display(44, 55, division)

//because it takes a function as a parameter

//arrow function
// function display(x, y, anotherFunction) {
//     let result = anotherFunction(x, y)
//     console.log(result)
// }
//
// display(44, 55, (a, b) => a + b)
// display(44, 55, (a, b) => a * b)
// display(44, 55, (a, b) => a / b)
//
//
// function add(a, b) {
//     return a + b
// }
//
// (a, b) => a + b
//
// function display1(x) {console.log(x)}
// x => console.log(x)
//
// function sayHello(){
//     console.log('Hello')
// }
// () => console.log('Say Hello')
//
// function display4(a,b){
//     console.log('The value is')
//     console.log(x)
//     return 'hello'
// }
//
// (a,b) => {
//     console.log('The value is')
//     console.log(x)
//     return 'hello'
// }

//array
//
// let numbers = [1, 2]
// let mixArray = [3, 4,  'This looks weird' , {name : 'Abdulahi'}]
// let evenMoreMixedArray = [numbers, [55,66]]
//
// let evenMoreMixedArray2 = [numbers, mixArray ,evenMoreMixedArray ]
//
// console.log('Number' , mixArray)
// console.log('mixArray' , mixArray)
// console.log('evenMoreMixedArray' , evenMoreMixedArray)
// console.log('evenMoreMixedArray2' , evenMoreMixedArray2)
//
// console.table(evenMoreMixedArray)

// let names = ["Abdulahi" , "Hassen" , "Omar" , "Ahmed"]
// names.sort()
// // let first = names[0]
// // let second = names[1]
//
// let [first, second, ...rest] = names
//
// console.log(first)
// console.log(second)
// console.log(rest)

// function filter(x) {
//     return x.toLowerCase().startsWith('a')
// }
//
//
// let names = ['Abdulahi', 'mohamed', 'Mohamed', 'hassen', 'Hassen', 'ahmed']
// names.sort((x, y) => y.localeCompare(x))

// let namesStartWithA = names.filter(x => x.toLowerCase().startsWith('H'))
// let namesLengthG6 = names.filter(x => x.length > 6)
// console.log(namesLengthG6)
//
// let exist = names.find(x => x == 'Mohameduu')
// console.log(exist)
//
// let mappedNames = names.map(x => ` ${x} has length of ${x.length} `)
// console.log(mappedNames)
//
// let numbers = [2,4,5,226]
//
// function reduce(acc , value){
//     return acc + value
// }
// let sum = numbers.reduce((acc, value)=> acc + value)
// console.log('sum' , sum)
//
// // let max = numbers.reduce((preValue, value)=> {
// //     if(preValue > value)
// //         return preValue
// //     return value
// // })
//
//
// max = numbers.reduce((preValue, currentValue)=> preValue > currentValue ?  preValue : currentValue)
// console.log('max' , max)

let names = ['Abdulahi' , 'Hassen' , 'Ahmed']
console.log(names)

//add end
// names.push("Amana" , "Abeer")
// console.log(names)

//add beg
names.unshift("Amana" , "Abeer")
console.log(names)

//rem end
names.pop()
console.log(names)

//rev beg
names.shift()
console.log(names)

//remove specific number of elemes
names.splice(1, 1)
console.log(names)
>>>>>>> 29c14d8497fd9a063bd46f98ccd129d81118b1ee






