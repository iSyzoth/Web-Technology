// To take user input use "readline" module. "readline" is a library just like "rs"
var readline = require("readline")

// create interface
var inp = readline.createInterface({
    input : process.stdin,              // keyboard for inptu
    output :process.stdout              // terminal for output
})

//Taking input and getting the output
inp.question("Enter name : ", function(data){  // data is a callback function 
    console.log(`Welcome ${data}!`)  // accessing the "data" or returning the data 
    inp.close()          // close
})