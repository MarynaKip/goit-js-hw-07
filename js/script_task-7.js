const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControlRef.addEventListener("input", handleChangeText);

function handleChangeText(event) {
  textRef.style.fontSize = `${fontSizeControlRef.value}px`;
}
