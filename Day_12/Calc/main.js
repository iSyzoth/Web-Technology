// here we are using c to acces calc.js 
var c=require("./calc.js")  //giving path of the file from where data is coming
                            // providing a variable in which data will be stored. Here we are using "c" to store data

                            // using variable res to store the data after the data is being processed
var res =c.sum(10,20)       // assigning value to a and b in order to calcualte when the function is being called.
console.log(res)            // printing the result

var res =c.sub(20,10)
console.log(res)

console.log(c.name)