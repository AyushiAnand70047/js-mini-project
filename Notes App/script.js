const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.create-btn');

function showNotes(){
    let savedNotes = localStorage.getItem("notes");
    if(savedNotes){   // only run replace if not null
        notesContainer.innerHTML = savedNotes.replace(/<div>(.*?)<\/div>/g, "$1<br>");
    }
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener('click', () => {
    let p = document.createElement("p");
    let img = document.createElement("img");
    p.className = "input-box";
    p.setAttribute("contenteditable","true");
    img.src = "./images/delete.png";
    notesContainer.appendChild(p).appendChild(img);
})

notesContainer.addEventListener("click",(e) => {
    if(e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    } else if(e.target.tagName == "P"){
        let notes = document.querySelectorAll('.input-box');
        notes.forEach(note => {
            note.onkeyup = function(){
                updateStorage();
            }
        })
    }
})