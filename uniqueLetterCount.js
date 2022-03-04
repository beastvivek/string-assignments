const countUniqueLetter = function (text) {
  let uniqueCharaters = "";
  for (let index = 0; index < text.length; index++) {
    if (!uniqueCharaters.includes(text[index])) {
      uniqueCharaters += text[index];
    }
  }
  return uniqueCharaters.length;
}

const testCountUniqueLetters = function (text, expected, testDescription) {
  let testResult = "✓";
  if (countUniqueLetter(text) !== expected) {
    testResult = "x";
  }
  console.log(testResult + " : " + testDescription);
}

const countUniqueLetterTestCases = function () {
  testCountUniqueLetters("a", 1, "Only one character, which is unique");
  testCountUniqueLetters("ab", 2, "Two characters word, where all character are unique");
  testCountUniqueLetters("abc", 3, "Three characters word, where all character are unique");
  testCountUniqueLetters("aa", 1, "Two characters word, where character repeats");
  testCountUniqueLetters("aabb", 2, "Four characters word, with pair of unique character");
  testCountUniqueLetters("", 0, "Empty text");
}

countUniqueLetterTestCases();