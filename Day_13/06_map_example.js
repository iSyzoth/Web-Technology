// var arr = [1,2,3,4,5,6,7,8,9,10]

// var new_arr = arr.map(function(item){return `5 * item`})

// console.log(new_arr)


// var arr = ["Siddhant", "Anubhav", "Rajat"]
// // item value is string, so we'll get i,n,a as output since these characters are on the [1] index
// var new_arr=arr.map((item)=>{return item[1]})

// var new_arr=arr.map((item)=>{return item[1] =='i'}) // true, false ,false
//console.log(new_arr)

var arr = [
    { id: 1 , name : "Siddhant", salary : 3000, contact : {phone : "33782"}, hobbies : ["Sleeping", "Traveling"]},
    { id: 2 , name : "Anubhav", salary : 2000, contact : {phone : "33782"}, hobbies : ["Cooking", "Traveling"]},
    { id: 3 , name : "Rajat", salary : 5000, contact : {phone : "33782"}, hobbies : ["Sleeping", "Reading"]},
]
// map returns all the stored value
var new_arr = arr.map(item => arr.hobbies.map(ele => ele[0]))
console.log(new_arr)