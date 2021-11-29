let raceNumber = Math.floor(Math.random() * 1000);

// true for early false for late
let runner_register = true; 
let runner_age = 20;

if (runner_age > 18 && runner_register) {
  raceNumber += 1000;
}

if (runner_age > 18) {
  if (runner_register) {
    console.log('Early race will be at 9:30 am');
    console.log(`Race number: ${raceNumber}`);
  }
  else {
    console.log('Early race will be at 11:00 am');
    console.log(`Race number: ${raceNumber}`);
  }
}

else if (runner_age < 18) {
  console.log('Youth registrants run at 12:30 pm');
  console.log(`Race number: ${raceNumber}`);
}

else {
  console.log('Registrants 18 age run at 13:00 pm');
  console.log(`Race number: ${raceNumber}`);
}