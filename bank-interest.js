// bank interest
function bankInterest(principal, interest, year) {
    let yourInterest = principal * interest * year / 100;
    return yourInterest;
};
const principal = 10000;
const interest = 8;
const year = 1;
const myAccount = bankInterest(principal, interest, year);
console.log(myAccount);
