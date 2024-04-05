function Pass(marks) {
    if (marks >= 40) {
        return "Pass in First Course";
    } else {
        return "Fail in First Course";
    }
}

function Grade(marks) {
    if (marks >= 55) {
        return "Pass in All Courses";
    } else if (marks >= 50) {
        return "Pass in Second Course";
    } else if (marks >= 45) {
        return "Pass in Third Course";
    } else if (marks >= 40) {
        return "Pass in Fourth Course";
    } else {
        return "Fail in All Courses";
    }
}

let studentMarks = 30;

console.log(Pass(studentMarks));
console.log(Grade(studentMarks));