/* Read data from file(create a dummy file and write some data in it) */

var fs= require("fs")

var read=fs.readFileSync("dummy.txt")
console.log(read = read.toString())
