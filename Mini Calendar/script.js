let date = document.getElementById('date');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

date.innerText = (today.getDate() < 10 ? "0":"") + today.getDate();
day.innerText = weekDays[today.getDay()];
month.innerText = months[today.getMonth()];
year.innerText = today.getFullYear();