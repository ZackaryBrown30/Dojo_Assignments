function fizbuzz (arg) {
    for (var i = 1; i <= arg; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    }
    else if ( i % 3 === 0 && i % 5 != 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0 && i % 3 != 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);}
}
}
fizbuzz(10)