const countUniqueLetter = function (string) {
  let uniqueCharaters = "";
  for (let index = 0; index < string.length; index++) {
    if (!uniqueCharaters.includes(string[index])) {
      uniqueCharaters += string[index];
    }
  }
  return uniqueCharaters.length;
}

const main = function () {
  console.log(countUniqueLetter("hello"));
  console.log(countUniqueLetter("number"));
  console.log(countUniqueLetter("11 unique letters"));
}

main();