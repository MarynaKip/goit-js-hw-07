let counterValue = 0;

const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const valueRef = document.querySelector('#value');

incrementBtnRef.addEventListener ('click', increment);
decrementBtnRef.addEventListener ('click', decrement);



function increment (event) {
counterValue += 1;
valueRef.textContent = counterValue;
};

function decrement (event) {
counterValue -= 1;
valueRef.textContent = counterValue;
};


