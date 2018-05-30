function assertionIsTrue() {
  var testReturnValues = new TestReturnValues()
  assert.isTrue(testReturnValues.trueStatement == true)
};

assertionIsTrue()

function resultIsEqual() {
  var testReturnValues = new TestReturnValues()
  assert.isEqual(testReturnValues.equalStatement, "test string")
};

resultIsEqual()

function objectIsEmpty() {
  var testReturnValues = new TestReturnValues()
  assert.isEmpty(testReturnValues.emptyObject)
};

objectIsEmpty()

function objectDoesContain() {
  var testReturnValues = new TestReturnValues()
  assert.contains(testReturnValues.notEmptyObject, "dog")
};

objectDoesContain()
