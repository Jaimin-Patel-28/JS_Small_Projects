let prompt = require('prompt-sync')();

let string = prompt('Enter any string : ');

function uppercaseString(){
    let uppercase = string.toUpperCase();
    console.log(uppercase);
    
}

uppercaseString();