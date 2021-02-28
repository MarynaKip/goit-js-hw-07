const refs = {
  controls: document.querySelector("#controls"),
  boxes: document.querySelector("#boxes"),
  createButton: document.querySelector('button[data-action="render"]'),
  deleteButton: document.querySelector('button[data-action="destroy"]'),
  input: document.querySelector("input"),
};

refs.createButton.addEventListener("click", createElements);

function createElements(event) {
  const amount = Number(refs.input.value);

  let elementsArray = [];
  let elementSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const divRef = document.createElement("div");

    elementsArray.push(divRef);

    elementsArray[i].style.width = `${elementSize + i * 10}px`;
    elementsArray[i].style.height = `${elementSize + i * 10}px`;

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let bgColor = `rgb(${r}, ${g}, ${b})`;

    elementsArray[i].style.backgroundColor = bgColor;
  }

  refs.boxes.append(...elementsArray);
}

refs.deleteButton.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  refs.input.value = "";
  let boxesFirstChild = refs.boxes.firstChild;
  while (boxesFirstChild) {
    refs.boxes.removeChild(boxesFirstChild);
    boxesFirstChild = refs.boxes.firstChild;
  }
}
