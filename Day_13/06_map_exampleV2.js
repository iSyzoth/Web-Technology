var arr = [1,3,2,6,7,9]

// filter only returns true value
// false -> false, 0, " ", null, undefined
// true -> anything else that is not false
var new_arr = arr.filter(item  =>item%2==0)
//1 -> false
//3 -> false
//2 -> true
//6 -> true

// var arr = ["Siddhant", "Anubhav", "Rajat"]
// var new_arr =arr.filter((item)=> {return item[1] == 'i'})


var arr = [
    { id: 1 , name : "Siddhant", salary : 3000, contact : {phone : "33782"}, hobbies : ["Sleeping", "Traveling"]},
    { id: 2 , name : "Anubhav", salary : 2000, contact : {phone : "33782"}, hobbies : ["Cooking", "Traveling"]},
    { id: 3 , name : "Rajat", salary : 5000, contact : {phone : "33782"}, hobbies : ["Sleeping", "Reading"]},
]
var new_arr = arr.filter(item=>item.id)
// object -> 1 true
// object -> 2 true
// object -> 3 true
// [same array]

var new_arr = arr.filter(item=>item.salary>4000)
// object -> 3 true

var new_arr = arr.filter(item=>item.hobbies.length == 0)
console.log(new_arr)


