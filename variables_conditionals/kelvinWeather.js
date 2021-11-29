// today forecast in kelvin
const kelvin = 293;

// converts kelvin to celsius
const celsius = kelvin - 273;

// converts celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// round down fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.ceil(newton);
console.log(`The temperature is ${newton} degrees Newton`);