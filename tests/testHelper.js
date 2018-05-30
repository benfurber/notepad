var consoleGreen = (testText) => {
  console.log(`%c${testText}`, "color: green; text-decoration: underline")
}

var assert = {
  isTrue: (assertionToCheck) => {
    if (!assertionToCheck) {
      throw new Error(`Test failed: ${assertionToCheck} is not truthy`)
    }
    consoleGreen(`Test passed: ${assertionToCheck} is truthy`)
  },
  isEqual: (resultToCheck, expectedResult) => {
    if (resultToCheck != expectedResult) {
      throw new Error(`Test failed: ${resultToCheck} didn't equal ${expectedResult}`)
    }
    consoleGreen(`Test passed: ${resultToCheck} is equal to ${expectedResult}`)
  },
  isEmpty: (resultToCheck) => {
    if (!(resultToCheck.length === 0)) {
      throw new Error(`Test failed: object is not empty`)
    }
    consoleGreen(`Test passed: object is empty`)
  },
  contains: (container, resultToFind) => {
    if (!(container.includes(resultToFind))) {
      throw new Error(`Test failed: ${resultToFind} is not in ${container}`)
    }
    consoleGreen(`Test passed: ${resultToFind} is in ${container}`)
  }
}
