// ITERATION 1

function updateSubtotal(product) {
console.log('Calculating subtotal, yey!');
const price = product.querySelector('.price span').innerText;
const quantity = product.querySelector('.quantity input').value
let total = price * quantity ;
product.querySelector('.subtotal span').innerHTML = total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let totalPrice = 0;
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
    totalPrice +=; 
    console.log(totalPrice)
  }
}


  // ITERATION 3
  //... your code goes here
// let totalPrice = document.getElementsByClassName('product');
// for (let i = 0; i < products.length; i++) {
//   totalPrice
// }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
