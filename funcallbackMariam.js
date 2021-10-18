function callback(a,b,implement){
    a=parseInt(a);
    b=parseInt(b);
    console.log("Fisrt number is",a);
    console.log("Second number is",b);
    implement(a,b);
}

function summation(a, b) {
    console.log("The summation is",a + b);
  }
  
  function subtraction(a, b) {
    console.log("The subtraction is",a - b);
  }

callback(3, 2, summation);
callback(3, 2, subtraction)



// function calculator(a, b, callback){
//     var addition = a + b;
//     var substraction = a - b;
//     var multiplication = a * b;
//     var division = a / b;
 
//     var results={
//         addition: addition,
//         substraction: substraction,
//         multiplication: multiplication,
//         division: division
//     };
 
//     //Make the third param, callback functin optional
//     if (callback && typeof(callback) === "function") {
//         callback(results); //call the function that was passed in 
//     }
// }
 
// calculator(10, 2);
// calculator(10, 2, function(rslt){
//     console.log(rslt);
// });