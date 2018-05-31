describe('A sample test', function () {
  var testReturnValues = new TestReturnValues()
  it('contains dog (contains test)', function () {
    assert.contains(testReturnValues.notEmptyObject, "dog")
  })
  it('is empty (empty test)', function () {
    assert.isEmpty(testReturnValues.emptyObject)
  })
  it('is equal to expected (equality test)', function () {
    assert.isEqual(testReturnValues.equalStatement, "test string")
  })
  it('is true-ish (the true test)', function () {
    assert.isTrue(testReturnValues.trueStatement == true)
  })
  it('should spy on function', function () {
    respondsTo(testReturnValues, 'tester')
  })
})
