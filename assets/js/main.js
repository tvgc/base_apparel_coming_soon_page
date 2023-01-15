const form = document.querySelector("form");
const inputContainer = document.querySelector('.input-container');
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

form.addEventListener('submit', event => {
    event.preventDefault();
    errorInputContainer();
    showErrorImage();
    showErrorMessage()
})