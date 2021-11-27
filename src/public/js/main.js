const btnOpenModal = document.getElementById('inicioSesion')
const modal = document.getElementById('modal')
let isOpenModal = false


///// ventana modal del incio de sesion
btnOpenModal.addEventListener('click', (event) => openModal())

function openModal() {
    if (isOpenModal) {
        modal.style.display = 'none'
    } else {
        modal.style.display = 'flex'
    }
    isOpenModal = !isOpenModal
}

//// ventana modal del registrarse

const btnOpenModalR = document.getElementById('registrarse')
const modalR = document.getElementById('modalR')
let isOpenModalR = false

btnOpenModalR.addEventListener('click', (event) => openModalR())

function openModalR() {

    if (isOpenModalR) {
        modalR.style.display = 'none'
    } else {

        modalR.style.display = 'flex'

    }
    isOpenModalR = !isOpenModalR
}


//caputura de datos del registro//////////////