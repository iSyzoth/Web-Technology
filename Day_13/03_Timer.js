/*
    setInterval()
    setTimeout()
    closeInterval()
    closeTimeout()
*/

var timer = setTimeout(function(){
    console.log("Hi")

}, 6000) //time in ms

clearTimeout(timer)

var int = setInterval(function(){
    console.log("Hi Again")
    }, 5000)

setTimeout(()=>{
    clearInterval(int)
}, 22000)

setImmediate(function(){}) // Not part of timer function
// It execute the function immediately 