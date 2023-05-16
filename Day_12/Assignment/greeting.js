/*
    Create a user defined local module greeting.js containing a function greet() that greets user based on time of the day. 
    If its morning, greet user as "Good morning", if its afternoon, greet user as "Good Afternoon" else as "Good Evening" 
    Create a main module that will bring in the greeting.js module and invoke the greet function
*/

function greet (){
    var hour = new Date().getHours();
    var greeting;

    if(hour>=6 && hour<11){
        greeting = "Good morning"
    }
    else if(hour>=11 && hour<17){
        greeting = "Good afternoon"
    }
    else if(hour>=17 && hour<22 )
        greeting = "Good evening"
    else{
        greeting = "Good night"
    }
    console.log(greeting)
}
 module.exports=greet;
