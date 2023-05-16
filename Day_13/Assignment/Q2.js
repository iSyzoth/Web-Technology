var http = require("http")
var fs = require("fs")

var server = http.createServer(function(req, res){
    let path = req.url;
    console.log(path)
    if(path=="/"){
        res.write("This is / path")
        res.end()
    }else if(path == "/data"){
        fs.readFile("data.html", function(err, data){
            if(err){
                res.write("File not found")
                res.end()
            }else{
                res.write(data.toString())
                res.end()
            }
        })
    }else if(path =="/profile"){
        fs.readFile("profile.html", function(err, data){
            if(err){
                res.write("File not found")
                res.end()
            }else{
                res.write(data.toString())
                res.end()
            }
        })
    }else{
        res.write("Wrong path")
        res.end()
    }
})

server.listen(5000,function(){
    console.log("Server running at 5000")
})