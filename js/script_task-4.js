const incrementBtnRef = document.querySelector('.counter button[data-action="increment"]');
const decrementBtnRef = document.querySelector('.counter button[data-action="decrement"]');
const valueRef = document.querySelector('#value');



let counterValue = 0;

function increment () {
counterValue += 1;
valueRef.textContent = counterValue;
  console.log("Increment +1")
};

function decrement () {
counterValue -= 1;
valueRef.textContent = counterValue;
  console.log("Decrement -1")
};

incrementBtnRef.addEventListener ('click', increment);
decrementBtnRef.addEventListener ('click', decrement)
