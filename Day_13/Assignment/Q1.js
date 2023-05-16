var http = require("http")

var server = http.createServer(function(req, res){
    let path = req.url;
    console.log(path)
    if(path =="/data"){
        res.write("This is data")
        res.end()
    }else if(path=="/profile"){
        res.write("This is profile")
        res.end()
    }else{
        res.write("Wrong path")
        res.end()
    }
})

server.listen(5000, function(){
    console.log("Server running at 5000")
})