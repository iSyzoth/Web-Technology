//var addition =()=> { // arrow function
    var addition = function(){  // traditional function 
    var fs = require("fs");

var list = fs.readFileSync("numberList.txt")
var str = (list.toString()).split(",")
    let sum =0;
        for (let i=0; i<str.length;i++)
            {
            sum += Number(str[i]);
            }
fs.writeFileSync("output.txt","Addition of the strings is "+ sum.toString())

}
addition();