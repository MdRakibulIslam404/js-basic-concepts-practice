// grade of exam
function marksToGrade(marks) {
    if (marks >= 0 && marks <= 32) {
        return ("Your grade is F");
    }
    else if (marks >= 33 && marks <= 39) {
        return ("Your grade is C")
    }
    else if (marks >= 40 && marks <= 49) {
        return ("Your grade is B")
    }
    else if (marks >= 50 && marks <= 59) {
        return ("Your grade is A-")
    }
    else if (marks >= 60 && marks <= 79) {
        return ("Your grade is A")
    }
    else if (marks >= 80 && marks <= 100) {
        return ("Your grade is A+")
    }
    return ("Please input numbers from 0 to 100")
}

const mark = marksToGrade(85);
console.log(mark);