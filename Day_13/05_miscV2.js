var std1 = {
    name : "Siddhant",
    ade : 23
}

// spread operator {...}
// spread operator take the object's (in this case std1's) internal vales, properties and places it to std2
// var std2  ={...std1}
// std2.email = "sid@gmail.com"
// console.log(std1)
// console.log(std2)

var std2 = {
    ...std1,
    email : "sid@gmail.com",
    phone : 7895645812
}


// Nested Object
var std3 = {
    name : "Atul",
    age : 23,
    contact :{      // contact object is same in both std3 and std4, since change in one will reflect on the other
        phone : "789456132"
    }
}

var std4 = {
    ...std3,
}
    std4.contact.email ="sid@gmail.com"
    std4.a = 20

    console.log(std3)
    console.log(std4)