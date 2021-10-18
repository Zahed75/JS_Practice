var a= 590;
var b ='55';

b=parseInt(b);

var result=a+b;
console.log(result);

// Float
var a= 590;
var b =55.0;



var result=a+b;
console.log(result);

var a= 0.1;
var b =0.2;

var result = a+b;
result=result.toFixed(2)

console.log(result);


var c =44;
var d =55;
sum=c+d;
console.log(sum);


var c =44;
var d =55;
sum=c/d;
console.log(sum);


var c =44;
var d =55;
sum=c%d;
console.log(sum);

// absolute number

var test = -588;
var absoluteNumber=Math.abs(test);
console.log(absoluteNumber);

// Round

var test2=5.89;
var roundnum=Math.round(test2);
console.log(roundnum);

// ceil


var test2=5.999;
var ceilnum=Math.ceil(test2);
console.log(roundnum);


// floor number

var test2=5.999;
var ceilnum=Math.floor(test2);
console.log(roundnum);

// random number

var number=Math.random()*100;
var result=Math.round(number);

console.log(result);