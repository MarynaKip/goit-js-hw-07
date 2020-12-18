const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', signChange);

function signChange (event) {
  nameOutputRef.textContent = event.target.value;
    console.log("text added")
}
