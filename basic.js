// variable
// var i = 23;
// let i = "Sadia";
// const i = true;

// loop
for (let i = 1; i <= 100; i++) {
    // console.log(i);
}

// odd Number
for (let i = 51; i <= 80; i += 2) { // i = i + 2
    // console.log(i);
}

// add 3 number with func
function add3numb(numbs1, numbs2, numbs3) {
    const total = numbs1 + numbs2 + numbs3;
    return total;
};
const myNumbs = add3numb(20, 20, 20);
// console.log(myNumbs);

// odd even check with function
function oddOrEven(oddEven) {
    if (oddEven % 2 == 0) {
        return "It is even number"
    }
    else if (oddEven % 2 != 0) {
        return "It is odd number"
    }
};
const oddNakiEven = oddOrEven(29);
console.log(oddNakiEven);

const oddNakiEvenCheck = oddOrEven(200);
console.log(oddNakiEvenCheck);