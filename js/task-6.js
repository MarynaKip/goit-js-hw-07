function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createButtonEl = document.querySelector('[data-create]')
const destroyButtonEl = document.querySelector('[data-destroy]')
const boxesEl = document.querySelector('div#boxes')

boxesEl.classList.add('gallery')

createButtonEl.addEventListener('click', createHandler)
destroyButtonEl.addEventListener('click', destroyHandler)
let divSize = 0

function createHandler(event) {
  const amount = inputEl.value
  if(amount>0 && amount<=100) createBoxes(amount)
}

function createBoxes(amount) {
  for(let i =0; i<amount; i++) {
    divSize += 30
    const newElement = document.createElement('div');
    newElement.style.backgroundColor = getRandomHexColor();
    newElement.style.width = `${divSize}px`;
    newElement.style.height = `${divSize}px`;
    boxesEl.append(newElement);
  }
}

function destroyHandler(event) {
  divSize = 0
  inputEl.value = ''
  boxesEl.innerHTML = ''
}