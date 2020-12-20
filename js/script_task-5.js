const inputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", signChange);

function signChange(event) {
  let enteredInput = event.target.value;
  enteredInput === ""
    ? (nameOutputRef.textContent = "незнакомец")
    : (nameOutputRef.textContent = enteredInput);

  //   if (enteredInput === "") {
  //     nameOutputRef.textContent = "незнакомец";
  //   } else {
  //     nameOutputRef.textContent = enteredInput;
  //   }
}
