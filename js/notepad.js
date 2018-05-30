function Notes () {
  this.notesArray = []
}

Notes.prototype.allNotes = function () {
  for (var entry of this.notesArray) {
    var node = document.createElement('LI')
    var textnode = document.createTextNode(entry)
    node.appendChild(textnode)
    document.getElementById('snippets').appendChild(node)
  }
}

Notes.prototype.addNote = function () {
  let text = document.getElementById('new_note').value
  this.notesArray.push(text)
  this.allNotes()

}


var notes = new Notes()
