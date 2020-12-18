const validInputRef = document.querySelector("#validation-input");

validInputRef.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  console.log(document.getElementById("validation-input").value.length);
  console.log(validInputRef.getAttribute("data-length"));
  if (
    Number(document.getElementById("validation-input").value.length) ===
    Number(validInputRef.getAttribute("data-length"))
  ) {
    validInputRef.classList.add("valid");
  } else {
    validInputRef.classList.add("invalid");
  }
}
