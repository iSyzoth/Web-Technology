 // fibonacci = function (n){}  annonymous function syntax

function fibonacci(n){
     var x =0, y=1;
     var temp =x+y;
    while(temp<=n){
        console.log(temp)
        x=y;
        y=temp;
        temp=x+y;
    }
    return temp;
}
const fibSeries = fibonacci(100);
console.log(fibSeries)