// fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
};
const nowCelsius = fahrenheitToCelsius(68);
console.log(nowCelsius);