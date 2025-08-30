let selectField = document.getElementById('select-field');
let selected = document.getElementById('selected');
let arrowIcon = document.getElementById('arrow-icon');
let options = document.getElementsByClassName('options');

selectField.addEventListener('click',()=>{
    list.classList.toggle('hide');
    arrowIcon.classList.toggle("rotate");
})

for(option of options){
    option.onclick = function(){
        selected.innerHTML = this.textContent;
        list.classList.toggle('hide');
        arrowIcon.classList.toggle("rotate");
    }
}