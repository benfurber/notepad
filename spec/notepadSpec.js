// function assertionIsTrue() {
//   var testReturnValues = new TestReturnValues()
//   assert.isTrue(testReturnValues.trueStatement == true)
// };
//
// assertionIsTrue()
//
// function resultIsEqual() {
//   var testReturnValues = new TestReturnValues()
//   assert.isEqual(testReturnValues.equalStatement, "test string")
// };
//
// resultIsEqual()

function objectIsEmpty() {
  var notepad = new Notes()
  assert.isEmpty(notepad.notesArray)
};

objectIsEmpty()

function objectDoesContain() {
  var notepad = new Notes()
  notepad.addNote("test")
  assert.contains(notepad.notesArray, "test")
};

objectDoesContain()
