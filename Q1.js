const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// a. Add 'Meat' to the beginning if not already added
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// b. Add 'Sugar' to the end if not already added
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// c. Remove 'Honey' if you are allergic to it
const allergicToHoney = true; // Change to false if not allergic
if (allergicToHoney) {
  const honeyIndex = shoppingCart.indexOf('Honey');
  if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
  }
}

// d. Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);
