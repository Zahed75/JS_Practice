//10=1*2*3*4*5*6*7*8*9*10

// var factorial=1;
// for (var i =1; i<10;i++){
//     factorial=factorial*i
//     console.log(i,factorial);
// }


//calculate the factorial number using while loop
// var i=1;
// var factorial=1;
// while (i<10){
//     factorial=factorial*i
//     console.log(i, factorial);
//     i++;
// }


function factorial(n){
var i=1;
var factorial=1;
while (i<=n){
    factorial=factorial*i
    // console.log(i, factorial);
    i++;
  }
  return factorial ;
}


var result=factorial(10);

console.log(result);