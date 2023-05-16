// making annoymous function of 
// function sum(a,b){
//   var result = a+b
//   return result    
//}

exports.sum = function(a,b){ // exporting annonymous function
    var result = a+b
    return result
}


exports.sub = function(a,b){ // exporting funciton
    var result = a+b
    return result
}

exports.name="Atul"     // exporting name

// var res = sum(10,20) // calling the function 
// console.log(res)

// res = sub (10,20)
// console.log(res)