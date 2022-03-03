const reverseString = function (string) {
  let reverse = "";
  for (let index = string.length - 1; index >= 0; index--) {
    reverse += string[index];
  }
  return reverse;
}

const isPalindrome = function (string) {
  return string === reverseString(string);
}

const main = function () {
  console.log(isPalindrome("hello"));
  console.log(isPalindrome("nitin"));
  console.log(isPalindrome(""));
}

// main();

const assertExpectation = function (actual, expected, testDescription) {
  let testResult = "✓";
  if (actual !== expected) {
    testResult = "x";
  }
  return testResult + " : " + testDescription;
}

const testPalindromeString = function () {
  const testDescription = "Should work for Palindrome String.";
  const expected = true;
  const actual = isPalindrome("nitin");

  return assertExpectation(actual, expected, testDescription);
}

const testNonPalindromeString = function () {
  const testDescription = "Should work for Non-Palindrome String.";
  const expected = false;
  const actual = isPalindrome("hello");

  return assertExpectation(actual, expected, testDescription);
}

const testEmptyString = function () {
  const testDescription = "Should work for Empty String.";
  const expected = true;
  const actual = isPalindrome("");

  return assertExpectation(actual, expected, testDescription);
}

const testPalindromeNumericString = function () {
  const testDescription = "Should work for Palindrome Numeric String.";
  const expected = true;
  const actual = isPalindrome("123321");

  return assertExpectation(actual, expected, testDescription);
}

const testNonPalindromeNumericString = function () {
  const testDescription = "Should work for Non Palindrome Numeric String.";
  const expected = false;
  const actual = isPalindrome("123421");

  return assertExpectation(actual, expected, testDescription);
}

const isPalindromeTestCases = function () {
  console.log(testPalindromeString());
  console.log(testNonPalindromeString());
  console.log(testEmptyString());
  console.log(testPalindromeNumericString());
  console.log(testNonPalindromeNumericString());
}

isPalindromeTestCases();