const isConsonant = function (character) {
  const allConsonants = "bcdfghjklmnpqrstvwxyz";
  return allConsonants.includes(character.toLowerCase());
}

const countConsonants = function (string) {
  let consonantsCount = 0;
  for (let index = 0; index < string.length; index++) {
    if (isConsonant(string[index])) {
      consonantsCount += 1;
    }
  }
  return consonantsCount;
}

const main = function () {
  console.log("Consonants count :", countConsonants("AaEeIiOoGgHh"));
  console.log("Consonants count :", countConsonants("Hello this is Vivek"));
}

main();