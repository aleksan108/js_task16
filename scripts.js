
const saveID = document.getElementById('saveButton');
let noteID = document.getElementById('new_comment');
let savedNotes = document.getElementById('div_notes-saved').innerHTML;
let savedNote = [];
let notes_counter = 0;

document.addEventListener("DOMContentLoaded", function(){
    if (localStorage.getItem("counter") > 0){
        notes_counter = Number(localStorage.getItem("counter"));
    }

    if (localStorage.getItem("notes")){
        savedNotes = localStorage.getItem("notes");
        document.getElementById('div_notes-saved').innerHTML = savedNotes;
    };
});

saveID.addEventListener('click', function(){
    if(validateEmptyNotes(noteID.value)){
        notes_counter = notes_counter + 1;

        localStorage.setItem("counter",notes_counter);

        savedNotes = `${savedNotes}<div class="div_note-saved"><p>Заметка #${notes_counter}</p><textarea name="text_note" class="published_note" readonly>${noteID.value}</textarea>
            </div>`;
        document.getElementById('div_notes-saved').innerHTML = savedNotes;

        localStorage.setItem("notes", savedNotes);

        noteID.value = null;
    }else{
        alert('Нельзя добавить пустую заметку');
    }

});

function validateEmptyNotes(noteText){
    if(!(noteText)){
        return false;
    }else return true;
}



