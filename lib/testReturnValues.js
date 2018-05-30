(function(exports) {
  function TestReturnValues() {
    this.trueStatement = true,
    this.equalStatement = "test string",
    this.emptyObject = [],
    this.notEmptyObject = [1, 2, "dog", "blue"]
  };

  exports.TestReturnValues = TestReturnValues
})(this);
