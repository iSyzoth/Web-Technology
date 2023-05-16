var fs =require("fs")

console.log("Hi1")

// nested : 
fs.readFile("demo.txt",function(err,data){
    
    fs.writeFile("demo1.txt",data.toString(),function(err,data){
        console.log("Writing data")
    })
    
})

console.log("hi3")


// Example why line no 18 will not be executed, if issue what the video at 6:40pm
// var x=""
// fs.readFile("demo.txt",function(err,data){
//     x=data
// })

// fs.writeFile("demo1.txt", x, function(err,data){
//     console.log("Writing done")
// })
