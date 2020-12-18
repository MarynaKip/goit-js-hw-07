const validInputRef = document.querySelector("#validation-input");

validInputRef.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  console.log(document.getElementById("validation-input").value.length);
  console.log(validInputRef.getAttribute("length"));
  if (
    document.getElementById("validation-input").value.length <=
    validInputRef.getAttribute("length")
  ) {
    validInputRef.classList.add("valid");
  } else {
    validInputRef.classList.add("invalid");
  }
}
