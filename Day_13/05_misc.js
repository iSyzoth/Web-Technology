// Looking in Object
var std1 = {
    name : "Siddhant",
    age : 23
}

var std2 = std1         // if we assign a variable to another variable. std2 pointing to std1. If changes are mde in std2, std1 will also be changed. Because they both are pointing to same object
std2.email = "sid@gamail.com"
console.log(std1)
console.log(std2)

var sts2 = {            // creating a new object in std 2, now std1 is not pointing to std2
    data : 1
}

// Looking for same scenario in Array 
var arr = ["Siddhant", "23478"]
var x = arr
x.push(123456789)
console.log(arr)
console.log(x)

