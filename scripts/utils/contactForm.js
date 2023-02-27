function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.classList.add('opened')   
    
    const closeBtn = document.querySelector('')
    closeBtn.focus()

    const main = document.getElementById('main')

    main.setAttribute('aria-hidden', true)
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById('main')

    modal.classList.remove('opened')
    main.setAttribute('aria-hidden', false)
    modal.setAttribute('aria-hidden', true)

    modal.style.display = "none";
}

/* VERIFICATION DE LA MODALE */

function verificationModal(photographeCourant) {
    const inputFirstName = document.querySelector('.firstName-input')
    const inputLastName = document.querySelector('.lastName-input')
    const inputEmail = document.querySelector('#email')
    const inputMsg = document.querySelector('#message')
    const errorMessage = document.querySelectorAll('.message-error')


// DECLARATION VARIABLE QUI CONTIENDRONT LE BOOLEEN DE CHECKING
let verificationDeFirst
, verificationDeLast
, verificationEmail
, verificationMsg;

/* CHECKING OF FIRSTNAME INPUT */
inputFirstName.addEventListener('input', (e) => {
    if(e.target.value.length == 0) {
        errorMessage[0].style.display = 'inline'
        inputFirstName.classList.add('echec')
        inputFirstName.classList.add('border')

        verificationDeFirst = false
    } else {
        errorMessage[0].style.display ='none'
        verificationDeFirst = true
    }
})
/* CHECKING OF LASTNAME INPUT */
inputLastName.addEventListener('input', (e) => {
    if(e.target.value.length == 0) {
        errorMessage[1].style.display = 'inline'
        inputFirstName.classList.add('echec')
        inputFirstName.classList.add('border')

        verificationDeLast = false
    } else {
        errorMessage[0].style.display ='none'
        verificationDeLast = true
    }
})
/* CHECKING OF EMAIL INPUT */
inputEmail.addEventListener('input', (e) => {
    const regexEmail = /\S+@\S+\.\S+/
    if(e.target.value.search(regexEmail) === 0) {
        errorMessage[2].style.display = 'none'

        verificationEmail = true
    } else {
        errorMessage[2].style.display ='none'
        inputEmail.classList.add('echec')
        inputEmail.classList.add('border')

        verificationEmail = false
    }
})
/* CHECKING OF MESSAGE INPUT */
inputMsg.addEventListener('input', (e) => {
    if(e.target.value.length == 0) {
        errorMessage[3].style.display = 'inline'
        inputFirstName.classList.add('echec')
        inputFirstName.classList.add('border')

        verificationMsg = false
    } else {
        errorMessage[3].style.display ='none'
        verificationMsg = true
    }
})

/* SUBMIT */
document.querySelector('.contact_button').addEventListener((e) => {
    e.preventDefault()

    /* SI TOUTES LES VERIFICATION A TRUE ON FAIT CE QUI SUIT */
    if(verificationDeFirst === true && verificationDeLast === true && verificationEmail === true && verificationMsg === true) {

    }
})
}
