let code_in_c = true;
if (code_in_c) console.log('If and if else are same as C');

// in comparison, the difference that here is === to equal and !== to not equal

if (10 === 10) console.log("See?");

// logical operatores are the same as C's

// what are considered falses: 0, "" or '', null, undefined, NaN

let pencil = 'pencil';
if (pencil) console.log(pencil);

// short-circuit evaluation
let username = '';
let defaultName = username || 'Stranger';
console.log(defaultName);

username = 'b';
defaultName = 'Stranger' && username;
console.log(defaultName);

// ternary operator (which is same in C)
// it is meant to be simple use, so if you want to check
//more condition or do more statement use classic if/else conditional
const hey = true;
hey ? console.log('Mint') 
: console.log('Apple');

// switch case is same as C