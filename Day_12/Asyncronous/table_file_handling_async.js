var fs = require("fs")

// for (var i=1;i<11;i++){
//     var res =(2*i) + "\n"
//     // appendFile adds data on top of already saved data
//     fs.appendFile("demo2.txt",res, function(err, data){
//         console.log("Writing done")
//     })
// }

var i = 0
function WriteTable(){
    var res = (2*i)+ "\n"
    fs.appendFile("demo3.txt", res, function(err, data){
        i++;
        if(i<11){
            WriteTable()
        }
    })
}

WriteTable()