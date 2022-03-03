const includes = function (string, character) {
  let index = string.length - 1;
  while (index >= 0) {
    if (string[index] === character) {
      return true;
    }
    index--;
  }
  return false;
}

const main = function () {
  console.log(includes("Vivek Bisht", "v"));
  console.log(includes("Vivek Bisht", "q"));
}

main();