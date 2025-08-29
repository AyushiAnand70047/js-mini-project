let pwd = document.getElementById("password");
let msg = document.getElementById('message');
let str = document.getElementById('strength');

pwd.addEventListener('input', () => {
    if(pwd.value.length > 0){
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
    
    if(pwd.value.length < 4){
        str.innerHTML = 'weak';
        pwd.style.borderColor = 'red';
        str.style.color = 'red';
    } else if(pwd.value.length >= 4 && pwd.value.length < 8){
        str.innerHTML = 'medium';
        pwd.style.borderColor = 'orange';
        str.style.color = 'orange';
    } else if(pwd.value.length >= 8){
        str.innerHTML = 'strong';
        pwd.style.borderColor = 'green';
        str.style.color = 'green';
    }
})