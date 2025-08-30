let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
    let today = new Date();
    hrs.innerText = (today.getHours() < 10 ? "0" : "") + today.getHours();
    min.innerText = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
    sec.innerText = (today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
}, 1000)