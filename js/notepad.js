function Notes () {
  this.notesArray = []
}

Notes.prototype.allNotes = function () {
  try {
    let element = document.getElementById('snippets')
    element.innerHTML = '';
    for (let entry of this.notesArray) {
      let node = document.createElement('LI')
      let link = document.createElement('A')
      link.setAttribute('onclick', `notes.displayNote(${this.notesArray.indexOf(entry)})`)
      link.setAttribute('href', 'javascript:void(0);')
      let textnode = document.createTextNode(entry.substring(0, 20) + '...')
      link.appendChild(textnode)
      node.appendChild(link)
      document.getElementById('snippets').appendChild(node)
    }
  } catch {
    console.log('Could not grab elements from page in allNotes')
  }

}

Notes.prototype.addNote = function (value = document.getElementById('new_note').value) {
  this.notesArray.push(value)
  try {
    document.getElementById('new_note').value = ''
  } catch {
    console.log('Could not grab elements from page in addNote')
  }

  this.allNotes()

}

Notes.prototype.displayNote = function (num) {
  document.getElementById('input_area').hidden = true
  document.getElementById('full_notes').hidden = false
  let paragraph = document.createElement('P')
  let textnode = document.createTextNode(`${this.notesArray[num]}`)
  paragraph.appendChild(textnode)

  document.getElementById('full_notes').appendChild(paragraph)
}

Notes.prototype.hideNote = function () {
  document.getElementById('input_area').hidden = false
  document.getElementById('full_notes').hidden = true
}


let notes = new Notes()
