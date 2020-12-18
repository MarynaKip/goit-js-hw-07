const inputRef = document.querySelector('#name-input');

inputRef.addEventListener('input', signChange);

function signChange (event) {
  inputRef.textContent = event.target.value;
    console.log("text added")
}
