var arr = [1,3,2,6,7,9]

var new_arr = arr.map(function(item){return item*item})
// 1 -> 1 * 1 = 1
// 3 -> 3 * 3 = 9
// 2 -> 2 * 2 = 4
// 6 -> 6 * 6 = 36
// 7 -> 7 * 7 = 49
// 9 -> 9 * 9 = 81
// [1,9,4,36,49,81]
console.log(new_arr)