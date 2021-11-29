function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
  }
  
  sayThanks('Cole');


// default parameter --> give predetermined value to a parameter in case
// there is no argument passed or it's undefined
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
let item1;
makeShoppingList(item1, 'apple', undefined);

// return --> by default it's undefined, it's same as C
// helper function --> which is called whitin another function
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
    return (monitorCount(rows, columns) * 200);
  }
  
  const totalCost = costOfMonitors(5, 4);
  console.log(totalCost);