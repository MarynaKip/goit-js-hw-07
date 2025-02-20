const inpurEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output')

inpurEl.addEventListener('input', handlerInput)

function handlerInput(event) {
    const inputValue = event.target.value.trim();
    spanEl.textContent = inputValue ?? 'Anonymous';
}

