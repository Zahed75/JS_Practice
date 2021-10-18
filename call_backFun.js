// function explain_callback(name,age,task){
// console.log("Hello",name);    
// console.log("your age is",age);
// task();

// }

// function washHand(){
//     console.log('Please babe Wash Your hand with soap before touch the baby');
// }

// function takeShower(){
//     console.log("Please baby  brush your teeth before the breakfast");
// }

// explain_callback("Zahed",22,washHand)
// explain_callback("Our baby",5,takeShower)



// function add(a, b) {
//     return a + b;
// }
// function sub(a, b) {
//     return a - b;
// }
// function mult(a, b) {
//     return a * b;
// }
// function div(a, b) {
//     return a / b;
// }
// function calculate(a, b, operation) {
//     return operation(a, b);
// }

// calculate(5, 10, add);
// calculate(5, 10, sub);
// calculate(5, 10, mult);
// calculate(5, 10, div);



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
//         callback(results); //call the function that was passed in ! 
//     }
// }
 
// calculator(10, 2);
// calculator(10, 2, function(rslt){
//     console.log(rslt);
// });



function callback(first, second, call) {
    console.log(first, second, call);
    call(first, second);
}

function sum(first, second) {
    console.log(`Total sum ${first+second}`);
}

callback(1, 2, sum);


/////////


