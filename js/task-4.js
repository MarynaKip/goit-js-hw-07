const formEl = document.querySelector('form.login-form')

formEl.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()
    const form = event.target
    const formElements = event.target.elements

    const formData = {
        email: formElements.email.value.trim(),
        password: formElements.password.value.trim(),
    }

    if(!formData.email || !formData.password) {
        alert('All form fields must be filled in')
    } else {
        console.dir(formData)
        form.reset()
    }
}
