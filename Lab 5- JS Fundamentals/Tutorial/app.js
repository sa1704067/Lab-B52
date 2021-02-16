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

function filter(x) {
    return x.toLowerCase().startsWith('a')
}


let names = ['Abdulahi', 'mohamed', 'Mohamed', 'hassen', 'Hassen', 'ahmed']
names.sort((x, y) => y.localeCompare(x))

let namesStartWithA = names.filter(x => x.toLowerCase().startsWith('H'))
let namesLengthG6 = names.filter(x => x.length > 6)
console.log(namesLengthG6)

let exist = names.find(x => x == 'Mohameduu')
console.log(exist)

let mappedNames = names.map(x => ` ${x} has length of ${x.length} `)
console.log(mappedNames)

let numbers = [2,4,5,226]

function reduce(acc , value){
    return acc + value
}
let sum = numbers.reduce((acc, value)=> acc + value)
console.log('sum' , sum)

// let max = numbers.reduce((preValue, value)=> {
//     if(preValue > value)
//         return preValue
//     return value
// })


max = numbers.reduce((preValue, currentValue)=> preValue > currentValue ?  preValue : currentValue)
console.log('max' , max)











