let userInput = document.getElementById('date');
let display = document.getElementById('display')

userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let birth = new Date(userInput.value);
    let birthDate = birth.getDate();
    let birthMonth = birth.getMonth() + 1;
    let birthYear = birth.getFullYear();

    let today = new Date();
    let todayDate = today.getDate();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear();

    let dateDiff, monthDiff, yearDiff;

    yearDiff = todayYear - birthYear;
    if (todayMonth >= birthMonth) {
        monthDiff = todayMonth - birthMonth;
    } else {
        yearDiff--;
        monthDiff = 12 + todayMonth - birthMonth;
    }
    if (todayDate >= birthDate) {
        dateDiff = todayDate - birthDate;
    } else {
        monthDiff--;
        if (monthDiff < 0) {
            monthDiff = 11;
            yearDiff--;
        }
        dateDiff = getDaysInMonth(todayMonth, todayYear) + todayDate - birthDate;
    }
    
    display.innerHTML = `You are <span>${yearDiff}</span> years, <span>${monthDiff}</span> months and <span>${dateDiff}</span> days old.`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}