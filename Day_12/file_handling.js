// for file handling use "fs" inbuilt module 
// keep the variable name and same
var fs=require("fs")

/* in "fs" module

    readFileSync(filename) -> returns Buffer data so use .toString() function to convert to string.
    writeFileSync(filename, data) // data must be in string format
    appendFileSync(filename, data) // data must be in string format
*/

var data = fs.readFileSync("demo.txt")
console.log(data.toString())        // use .toString funciton to conver the data into string

var str = "This is some data"
fs.writeFileSync("demo1.txt",str)
//If file does not exist writeFileSync and appendFileSync will create it
//
//

var str ="\n Some new data in next line."
fs.appendFileSync("demo1.txt",str)