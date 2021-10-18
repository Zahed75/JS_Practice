function helloBabe(){
    console.log("Oh babe kothay tumi");
    console.log("ei koi tumi ");
    console.log("amar kahrap lagche toh koi tumi");
}

helloBabe();


function dobuleIt(num){
    var result=num*2;
    console.log(result);
}

dobuleIt(10);
dobuleIt(20);


function dobuleIt(num){
    var result=num*2;
    return result;
}

var num1=dobuleIt(10);
var num2=dobuleIt(20);

var sum=num1+num2;
console.log(sum);


function summation(num1,num2){
    var result=num1+num2;
    return result;
}

var sum=summation(20,10);
var sum=summation(20,100);
console.log(sum);