function Notes () {
  this.notesArray = []
}

Notes.prototype.allNotes = function () {
  for(i=0; i=this.notesArray.length(); i++){
    var node = document.createElement('LI');
    var textnode = document.createTextNode(this.notesArray[i].content);
    node.appendChild(textnode);
    document.getElementById('snippets').appendChild(node);
    console.log(this.notesArray);
  }
}

Notes.prototype.addNote = function () {
  this.notesArray.push({ 'content': document.getElementById('new_note').value });
  this.allNotes();

}


var notes = new Notes()
