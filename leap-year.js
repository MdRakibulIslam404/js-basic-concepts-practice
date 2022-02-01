// leap year check
function leapYear(year) {
    if ((year % 4 == 0 && year % 100 != -0) || (year % 400 == 0)){
        return true;
    }
    return false;
};
const yr = leapYear(2024);
console.log(yr);