const controlsRef = document.querySelector('#controls');
const boxesRef = document.querySelector('#boxes');
const createButtonRef = document.querySelector('button[data-action="render"]');
const deleteButtonRef = document.querySelector('button[data-action="destroy"]');

createButtonRef.addEventListener('click', createBoxes);

let amount = controlsRef.value;
function createBoxes(amount) {
  
  let elementsArray = [];
  let elementSize = 30;
  
  for(let i=0, i<amount, i+=1) {
    
    const divRef = document.createElement("div");
    
    let r = Math.floor(Math.rendom() * (255-0+1)+0);
    let g = Math.floor(Math.rendom() * (255-0+1)+0);
    let b = Math.floor(Math.rendom() * (255-0+1)+0);
    
    divRef.style.backgroundColor = `rgb(${r}, ${g}, ${b},`;
    
    divRef.style.width = `${elementSize + i*10}px`;
    divRef.style.height = `${elementSize + i*10}px`;
    elementsArray.push(divRef)
  }
  boxesRef.append(...elementsArray);
}



function destroyBoxes() {
  
}