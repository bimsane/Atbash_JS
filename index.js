const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function convert(data) {
  let output = "";
  for (let i = 0; i < data.length; i++) {
    const element = String(data[i]).toLowerCase();
    var index = alphabet.indexOf(element);
    if (isCharacterALetter(element)) {
      output += alphabet[25 - index];
    } else {
      output += element;
    }
  }
  console.log(output);
}
function isCharacterALetter(char) {
  return /[a-zA-Z]/.test(char);
}

convert("svool dliow!");
convert("Have A Nice Day!");