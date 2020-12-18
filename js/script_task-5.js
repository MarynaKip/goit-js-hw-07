const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', signChange);

function signChange (event) {
  if (event.target.value === "") {
      nameOutputRef.textContent = 'незнакомец'
      } else {
  nameOutputRef.textContent = event.target.value;
      }
}
