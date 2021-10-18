var a = 0;

var result = Math.floor(a);
var result2 = Math.ceil(a);
var result3 = Math.round(a);



for (var i = 0; i < 10; i++) {
    var dice = Math.random() * 6;

    var output = Math.round(dice);
    console.log(output);
}

console.log(result);
console.log(result2);
console.log(result3);

console.log(dice);
