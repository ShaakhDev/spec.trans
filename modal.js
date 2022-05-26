const backdrop = document.querySelector('#backdrop')
const closeBtn = document.querySelector('#close');
const openBtn = document.querySelector('#open');
const modal = document.querySelector('#modal');
const inputs = [...document.querySelectorAll('input')]
const warning = document.querySelector('#warning')
const html = document.querySelector('html')


let isInputFilled;
openBtn.addEventListener('click', () => {
    isInputFilled = inputs.every(input => input.value !== '')
    showWarning(isInputFilled)
})

closeBtn.addEventListener('click', () => hideModal())

backdrop.addEventListener('click', () => hideModal())

function showWarning(isInputFilled) {
    if (!isInputFilled) {
        warning.style.display = "inline-block"
    }
    else {
        warning.style.display = "none"
        showModal()
    }
    return
}

function showModal() {
    clearInput(inputs)
    backdrop.style.display = 'block'
    modal.style.display = 'block'
    html.style.overflow = 'hidden'

    return
}
function hideModal() {
    backdrop.style.display = 'none'
    modal.style.display = 'none'
    html.style.overflow = 'visible'
}

function clearInput(inputs) {
    inputs.forEach(input => input.value = "");
}