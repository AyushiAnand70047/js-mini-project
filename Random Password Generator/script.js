const passwordBox = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate-btn");
const copyMsg = document.getElementById('copy-msg');

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const numbers = "0123456789";
const symbols = "!@#$%^&*(){}[]<>?-=+~_/.,";
const allChars = upperCase + lowerCase + numbers + symbols;

function generatePassword(){
    copyMsg.innerText = ""
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    return password;
}

copyBtn.addEventListener("click", () => {
    if(passwordBox.value != ""){
        if(!navigator.clipboard){
            alert("Clipboard API not available. Please copy manually.");
        } else {
            navigator.clipboard.writeText(passwordBox.value);
            copyMsg.innerText = "copied";
        }     
    } else {
        copyMsg.innerText = "Failed"; 
    }
})

generateBtn.addEventListener("click", () => {
    passwordBox.value = generatePassword();
})