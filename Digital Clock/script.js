function showTime() {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    document.getElementById('clock').innerText = time;
}

setInterval(showTime,1000);

const startTime = document.getElementById('startTime');
const timer = document.getElementById('timer');

startTime.addEventListener('click', () => {
    let time = document.getElementById
    ('time').value;
    if(time != '' && time > 0) {
        let interval = setInterval(() => {
            if(time <= 0) {
                clearInterval(interval)
                timer.innerText = 'Time is up!';
            }
            else{
                timer.innerText = time;
                time--;
            }
        },1000)
    }
})
