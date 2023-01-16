const form = document.querySelector("form");
const inputContainer = document.querySelector('.input-container');
const inputEmail = document.querySelector('.input-email');
const errorImage = document.querySelector('.error-img');
const errorMessage = document.querySelector('.error-msg');

// console.log(form, inputContainer, errorImage, errorMessage)

const errorInputContainer = () => {
    inputContainer.classList.add('error')
}

const showErrorImage = () => {
    errorImage.style.display = "block"
}

const showErrorMessage = () => {
    errorMessage.style.display = "block"
}

const notEmail = () => {
    const result = inputEmail.value.includes("@")
    return result
}

const returnFunctions = () => {
    errorInputContainer()
    showErrorImage()
    showErrorMessage()
}

form.addEventListener('submit', event => {
    event.preventDefault();
    if(!inputEmail.value || !notEmail()) {
        console.log(inputEmail.value)
        returnFunctions()
    }
})

