describe("Notepad", function () {
  var notepad = new Notes();
  it("is empty", function (){
    assert.isEmpty(notepad.notesArray)
  });
  it("contains a note", function () {
    notepad.addNote("test")
    assert.arrayContains(notepad.notesArray, "test")
  });
});
