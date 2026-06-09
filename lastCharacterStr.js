let prompt = require('prompt-sync')();

let string = prompt('Enter any string : ');

function lastCharacter(){
    let last = string[string.length - 1];
    console.log(last);
}

lastCharacter();
