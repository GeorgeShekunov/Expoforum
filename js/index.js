'use strict'
const openModal = document.getElementById("open-modal")
const modal = document.getElementById("modal")
const modalClose = document.getElementById("modal-close")

// openModal.addEventListener('click', (e) => {
//     e.preventDefault()
//     modal.style.display = "flex"
//     document.body.style.overflow = "hidden"
// })

modalClose.addEventListener('click', (e) => {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
})

function openCloseModal(e, modal, body) {
    if (e.target == openModal) {
        e.preventDefault()
        modal.style.display = "flex"
        body.style.overflow = "hidden"
    }
}
openModal.addEventListener('click', (e) =>openCloseModal(e, modal, document.body))

document.addEventListener('click', (e) =>{
    const searchInput = document.getElementById("search-input")
    if (e.target == searchInput) {
        return
    }
    if (e.target.id == 'search-icon' ) {
        e.target.style.display = 'none'
        searchInput.style.display = 'block'
        searchInput.focus()
    }else {
        searchInput.style.display = 'none'
        document.getElementById('search-icon').style.display = 'block'
    }
})