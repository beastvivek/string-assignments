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

const testIsPalindrome = function (text, expected, testDescription) {
  let testResult = "✓";
  if (isPalindrome(text) !== expected) {
    testResult = "x";
  }
  console.log(testResult + " : " + testDescription);
}

const isPalindromeTestCases = function () {
  testIsPalindrome("a", true, "Single character");
  testIsPalindrome("aa", true, "Two character Palindrome string");
  testIsPalindrome("aba", true, "Three character Palindrome string");
  testIsPalindrome("ab", false, "Two character Non-Palindrome string");
  testIsPalindrome("", true, "Empty string");
}

isPalindromeTestCases();