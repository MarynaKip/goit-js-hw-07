const validInputRef = document.querySelector("#validation-input");

validInputRef.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  let validInputLength = document.getElementById("validation-input").value
    .length;
  let dataAttributeLength = validInputRef.getAttribute("data-length");
  console.log(validInputLength);
  console.log(dataAttributeLength);
  if (Number(validInputLength) === Number(dataAttributeLength)) {
    validInputRef.classList.add("valid");
    validInputRef.classList.remove("invalid");
  } else {
    validInputRef.classList.add("invalid");
    validInputRef.classList.remove("valid");
  }
}
