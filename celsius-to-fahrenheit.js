// celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
};
const nowFahrenheit = celsiusToFahrenheit(20);
console.log(nowFahrenheit);