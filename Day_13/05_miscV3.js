// Array

// var arr = [1,7,3,5]
// // var x = [...arr] // spread operator in array, copying all the values from arr into x
// // x.push (30)
// var x = [...arr, 30] // without using push [1,7,3,5,30]

// console.log(arr)
// console.log(x)


var arr = [
    {id: 1, name : "Sid"},
    {id: 2, name : "Rajat"},
    {id: 3, name : "Anubhav"}
]

var x = [...arr]
x[0].email="sid@gmail.com"

// console.log(arr)
// console.log(x)

//____________________________________________

var name = "Siddhant"
var data = 42342
var sum = function (){
    return "None"
}

// var obj = {
//  variable name : property
//     name : name,
//     data: data,
//     sum : sum
// }

// same thing as above
var obj = { name,data, sum } // creating property name, data & data and assigning value to the variable name and property

//________________________________________________

// Nomral function
 function print(name){
    console.log("Normal Function : Hello " + name)
    return "Welcome"
}

// annonymous function
var x = (function(name){
    console.log("Annonymous Function : Hello " +name)
    return "Welcome"
})(`Sid`)
// always use return and assign to variable

// using arrow function
var x = ((name)=>{
    console.log("Annonyous Function using arrows : Hello " + name)
    return "Welcome"
})("Sid")

//________________________________________________

// In JS, treat function as value


// var x = "Siddhant"
// var y = "Verma"
// var arr = [x,y] // [Siddhant, Verma]

// instead of using var x = "Siddhant", we can use 
var x = function (name){console.log("Hi " + name)}

var arr = [
    function (name){console.log("Hi " + name)}, // Index 0
    function (name){console.log("Hi " + name)}  // Index 1
]

arr[0]("Siddhant")
arr[1]("Sid")



