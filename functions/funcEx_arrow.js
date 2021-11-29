// function expression --> define function inside a expression
// the name is usually omitted (anonymous function)
// often stored in a variable to refer to it
// common practice to use const
// unlike function declaration, it's not HOISTED,
// so it MUST be defined before calling it

const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
      return true;
    }
    else return false;
  };
  console.log(plantNeedsWater);
  console.log(plantNeedsWater('Wednesday'));
  console.log(plantNeedsWater());


// ARROW FUNCTION
// shorter way to write function (no need to type function)
// first include parameter in () and then add arrow

const plantNeedsWater2 = (day) => {
  if (day === 'Wednesday') {
    return true;
  }
  else return false;
};
console.log(plantNeedsWater2('Wednesday'));

// when arrow function takes only a single parameter
// that parameter doesn't need to be enclosed in parentheses
// when it's single-line it doesn't need curly braces, and
// it will be automtically returning (X return) (AKA implicit return)

//  const plantNeedsWater = (day) => {
//    return day === 'Wednesday' ? true : false;
//  };
//      REFACTORING IT

const plantNeedsWater = day => day === 'Wednesday' ? true : false;