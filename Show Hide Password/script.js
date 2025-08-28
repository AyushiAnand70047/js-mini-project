let password = document.getElementById('password');
let show = document.getElementById('show');
let hide = document.getElementById('hide');

hide.onclick = function(){
    hide.style.display = "none";
    show.style.display = "block";
    password.type = "text";
}

show.onclick = function() {
    show.style.display = "none";
    hide.style.display = "block";
    password.type = "password";
}