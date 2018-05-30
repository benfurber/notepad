function Notes () {
  this.notesArray = []
}

Notes.prototype.allNotes = function () {
  //display list of notes
}

Notes.prototype.addNote = function () {
  this.notesArray.push({ 'content': document.getElementById("new_note").value })
}

var notes = new Notes()
