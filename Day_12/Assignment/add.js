/* 
    Write a code to read list of numbers from file and perform addition and write into another file
    (Create two file ,First file have comma seperated numbers )
*/
var fs = require("fs");

var list = fs.readFileSync("numberList.txt")
var str = (list.toString()).split(",")
    let sum =0;
        for (let i=0; i<str.length;i++)
            {
            sum += Number(str[i]);
            }
fs.writeFileSync("output.txt","Addition of the strings is "+ sum.toString())

