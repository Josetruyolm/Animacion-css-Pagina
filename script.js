const modal = document.querySelector('modal')
const button1 = document.querySelector('button1')
const closeButton = document.querySelector('modal-container-close')

button1.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})

closeButton.addEventListener('click', () => {
    modal.classList.add('hidden')
    modal.classList.remove('visible')
})