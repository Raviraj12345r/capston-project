const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  const product = event.target.parentNode;
  
  const productName = product.querySelector('h3').innerText;
  const productPrice = product.querySelector('p').innerText;

  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');

  const cartItemImage = document.createElement('img');
  cartItemImage.src = product.querySelector('img').src;

  const cartItemName = document.createElement('h3');
  cartItemName.innerText = productName;

  const cartItemPrice = document.createElement('p');
  cartItemPrice.innerText = productPrice;

  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.addEventListener('click', removeCartItem);

  cartItem.appendChild(cartItemImage);
  cartItem.appendChild(cartItemName);
  cartItem.appendChild(cartItemPrice);
  cartItem.appendChild(removeButton);

  const cart = document.querySelector('.cart');
  cart.appendChild(cartItem);
}
function removeCartItem(event) {
  const cartItem = event.target.parentNode;
  cartItem.remove();
}
alert("Welcome to RK mall")


let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("Login successfull");
    console.log(
      `This form has a username of ${username.value} and password of ${password.value}`
    );

    username.value = "";
    password.value = "";
  }
});