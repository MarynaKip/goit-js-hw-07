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
  if(divSize>0) {
    divSize = 0
    boxesEl.innerHTML = ''
  }
  for(let i =0; i<amount; i++) {
    divSize += 30
    const newElement = document.createElement('div');
    newElement.style.backgroundColor = getRandomHexColor();
    newElement.style.width = `${divSize}px`;
    newElement.style.height = `${divSize}px`;
    boxesEl.append(newElement);
  }
  inputEl.value = ''
}

function destroyHandler(event) {
  divSize = 0
  inputEl.value = ''
  boxesEl.innerHTML = ''
}