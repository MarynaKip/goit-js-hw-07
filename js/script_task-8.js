const controlsRef = document.querySelector('#controls');
const boxesRef = document.querySelector('#boxes');

controlsRef.addEventListener('input', createBoxes);

let addedElementsText = ""
function createBoxes(amount) {
  let elementSize = 30;
  for(let i=0, i<amount, i+=1) {
    addedElementsText = addedElementsText + `<div ></div>`
  }
}

function destroyBoxes() {
  
}
