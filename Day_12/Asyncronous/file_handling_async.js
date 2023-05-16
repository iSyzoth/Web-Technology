var fs = require("fs")

console.log("Hi1")
// fs.readFile("demo.txt",function(err, data){
//     console.log("Hi2")
//     console.log(data.toString())
// })

var str = "This is a new data"
fs.writeFile("demo.txt",str,function(err,data){
    console.log("Writing done")
})

console.log("Hi3")





/*
    readFile(filename,function(err, dat){})
    writeFile(filename, data, function(err,data){})
    appendFile(filename,data,function(err,data){})

*/


