var http = require("http")
var fs = require("fs")

var server = http.createServer(function(req, res){
    let path = req.url;
    console.log(path)
    if(path =="/"){
        res.write("This is / path")
        res.end()
    }else if(path =="/add"){
        fs.readFile("add.html", function(err,data){
            if(err){
                res.write("File not found")
                res.end()
               }else{
                res.write(data.toString())
                res.end()
               }
        })
    }else if(path =="/sub"){
        fs.readFile("sub.html", function(err,data){
            if(err){
                res.write("File not found")
                res.end()
            }else{
                res.write(data.toString())
                res.end()
            }
        })
    }else if(path =="/mul"){
        fs.readFile("mul.html", function(err,data){
            if(err){
                res.write("File not found")
                res.end()
            }else{
                res.write(data.toString())
                res.end()
            }
        })
    }else if(path =="/div"){
        fs.readFile("div.html", function(err,data){
            if(err){
                res.write("File not found")
                res.end()
            }else{
                res.write(data.toString())
                res.end()
            }
        })
    }    
    else if(path.startsWith("/add")){
        var qs = path.split("?")[1]
        var data =new URLSearchParams(qs)
        console.log("Data",data)
        var result = Number(data.get("num1")) + Number(data.get("num2"))
        res.write(result.toString())
        res.end()
    }else if(path.startsWith("/sub")){
        var qs = path.split("?")[1]
        var data =new URLSearchParams(qs)
        console.log("Data",data)
        var result = Number(data.get("num1")) - Number(data.get("num2"))
        res.write(result.toString())
        res.end()
    }else if(path.startsWith("/div")){
        var qs = path.split("?")[1]
        var data =new URLSearchParams(qs)
        console.log("Data",data)
        var result = Number(data.get("num1")) / Number(data.get("num2"))
        res.write(result.toString())
        res.end()
    }else if(path.startsWith("/mul")){
        var qs = path.split("?")[1]
        var data =new URLSearchParams(qs)
        console.log("Data",data)
        var result = Number(data.get("num1")) * Number(data.get("num2"))
        res.write(result.toString())
        res.end()
    }else {
        res.write("Wrong path")
        res.end()
    }
})

server.listen(5000,function(){
    console.log("Server running at 5000")
})

// open localhost:5000 in browser to see`