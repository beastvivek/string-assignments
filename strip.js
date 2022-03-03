const strip = function (string) {
  let strippedString = "";
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== " ") {
      strippedString += string[index];
    }
  }
  return strippedString;
}

const main = function () {
  console.log(strip("This is a test text."));
}

main();