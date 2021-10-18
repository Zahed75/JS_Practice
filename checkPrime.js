function PrimeNumber(num){
    for(x=2;x<num;x++){
        if(num % x == 0){
            return "Not a Prime Number";
        }
    }
    return "  Prime Number";
}

var test=PrimeNumber(6);
console.log(test);