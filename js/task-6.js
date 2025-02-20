function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

boxesEl.classList.add('gallery');

createButtonEl.addEventListener('click', createHandler);
destroyButtonEl.addEventListener('click', destroyHandler);

function createHandler() {
  const amount = Number(inputEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
}

function createBoxes(amount) {
  boxesEl.innerHTML = '';

  const fragment = document.createDocumentFragment();
  let divSize = 30;

  for (let i = 0; i < amount; i++) {
    const newElement = document.createElement('div');
    newElement.style.backgroundColor = getRandomHexColor();
    newElement.style.width = `${divSize}px`;
    newElement.style.height = `${divSize}px`;
    fragment.appendChild(newElement);
    divSize += 10;
  }

  boxesEl.appendChild(fragment);
  inputEl.value = '';
}

function destroyHandler() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}
