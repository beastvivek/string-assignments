const isVowel = function (character) {
  const allVowels = "aeiou";
  return allVowels.includes(character.toLowerCase());
}

const countVowels = function (string) {
  let vowelCount = 0;
  for (let index = 0; index < string.length; index++) {
    if (isVowel(string[index])) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

const main = function () {
  console.log("Vowels count :", countVowels("AaEeIiOoGgHh"));
  console.log("Vowels count :", countVowels("Hello this is Vivek"));
}

main();