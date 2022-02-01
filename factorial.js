// factorial with while loop // increment \\
function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
};
const num = getFactorial(5);
// console.log(num);

// factorial with for loop // increment \\
function getFact(numbs) {
    let factorial = 1;
    for (let i = 1; i <= numbs; i++) {
        factorial = factorial * i;
    }
    return factorial;
};
const fact = getFact(7);
// console.log(fact);

// factorial with while loop // decrement \\
function decFact(decNum) {
    let fact = 1;
    let i = decNum;
    while (i >= 1) {
        fact = fact * i;
        i--;
    }
    return fact;
};
const myFact = decFact(7);
// console.log(myFact);

// factorial with for loop // decrement \\
function getFactorial2(number2) {
    let factorial2 = 1;
    for (let i = number2; i >= 1; i--) {
        factorial2 = factorial2 * i;
    }
    return factorial2;
}
const herNum = getFactorial2(5);
console.log(herNum);