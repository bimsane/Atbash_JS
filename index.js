const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function Decypher(data) {
  for (let i = 0; i < data.length; i++) {
    const element = String(data[i]).toLowerCase().trim();
    var index = alphabet.indexOf(element);
    if(isCharacterALetter(element)){
      console.log(String(element).toLowerCase() + " : " + alphabet[25 - index]);
    }
  }
}
function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char)
}

console.log(Decypher('Welcome to the jungle'));