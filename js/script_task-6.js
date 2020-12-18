const validInputRef = document.querySelector('#validation-input');

validInputRef.addEventListener('blur', handleInputBlur);

function handleInputBlur (event) {
  if (event.target.value.length <= ###) {
      validInputRef.classlist.add('valid')
      } else {
        validInputRef.classlist.add('invalid')
      }
}
