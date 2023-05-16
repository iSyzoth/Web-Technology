var http = require("http")

var server = http.createServer(function(req, res){
    console.log("Got request")
        res.write("Hi from Server")
        res.end()
})

server.listen(5000,function(){
    console.log("Server running at 5000")
})

// open localhost:5000 in browser to see