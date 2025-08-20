let input = document.getElementById('number-input');
let ans = document.getElementById('result');

function handleClickButton(el) {
    const exp = `${input.value}${el.innerText}`;
    input.value = exp;
    if(['+', '-', '*', '/'].includes(el.innerText)) return;
    ans.value = eval(exp);
}

function reset() {
    input.value = "";
    ans.value = "";
}

function result() {
    input.value = ans.value;
}