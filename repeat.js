const repeat = function (string, repetition) {
  let repeatedString = "";
  while (repetition > 0) {
    repeatedString = repeatedString + string;
    repetition--;
  }
  return repeatedString;
}

const main = function () {
  console.log(repeat("vivek", 2));
  console.log(repeat("vivek", 3));
}

main();

const assertExpectation = function (actual, expected, testDescription) {
  let testResult = "✓";
  if (actual !== expected) {
    testResult = "x";
  }
  return testResult + " : " + testDescription;
}

const testStringRepeat = function () {
  const testDescription = "Should repeat the string for given times";
  const expected = "vivekvivek";
  const actual = repeat("vivek", 2);

  return assertExpectation(actual, expected, testDescription);
}

const testCharacterRepeat = function () {
  const testDescription = "Should repeat the character for given times";
  const expected = "vvvvv";
  const actual = repeat("v", 5);

  return assertExpectation(actual, expected, testDescription);
}

const testNumericStringRepeat = function () {
  const testDescription = "Should repeat the character for given times";
  const expected = "55555";
  const actual = repeat("5", 5);

  return assertExpectation(actual, expected, testDescription);
}

const repeatTestCases = function () {
  console.log(testStringRepeat());
  console.log(testCharacterRepeat());
  console.log(testNumericStringRepeat());
}

// repeatTestCases();