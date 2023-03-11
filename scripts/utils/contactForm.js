const body = document.querySelector('body')
const openModalBtn = document.querySelector('.open-modal-btn') // OPEN BUTTON MODAL
const main = document.getElementById('main')

const modal = document.getElementById('contact_modal')
const modalTitle = document.getElementById('modalTitle')
const modalCloseBtn = document.querySelector('.modal-close-btn')
 
// ARROW FUNCTION DISPLAY MODAL
function displayModal() {
   main.setAttribute('aria-hidden', 'true')
   modal.setAttribute('aria-hidden', 'false')
   body.classList.add('no-scroll')
   modal.style.display = 'flex'
   modalCloseBtn.focus()
}

function closeModal() {
   main.setAttribute('aria-hidden', 'false')
   modal.setAttribute('aria-hidden', 'true')
   body.classList.remove('no-scroll')
   modal.style.display = 'none'
   openModalBtn.focus()
}

// EVENT LISTENER FOR OPENING THE MODAL
openModalBtn.addEventListener('click', displayModal);
// EVENT LISTENER FOR CLOSING THE MODAL
modalCloseBtn.click('click', closeModal)

// CLOSE MODAL WHEN SPACE BAR (ESCAPE) KEY IS PRESSED

openModalBtn.addEventListener('keydown', e => {
   const keyCode = e.keyCode ? e.keyCode : e.which
 
   if (modal.getAttribute('aria-hidden') == 'false' && keyCode === 27) {
       closeModal()
   }
})

/* CHECK MODAL */

function verificationModal() {
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
    if(e.target.value.length <= 2) {
        console.log(e.target.value.length)
        errorMessage[0].style.display = 'inline'
        inputFirstName.classList.add('echec')
        inputFirstName.classList.add('border')

    errorMessage.innerText = "Veuillez entrer 2 caractères minimum"
    errorMessage.style.color = 'red';
    errorMessage.style.fontSize = '.9rem'

        verificationDeFirst = false
    } else {

    errorMessage.innerText = 'champs valide'
    errorMessage.style.color = 'green'
    errorMessage.style.fontSize = '.9rem'
        errorMessage[0].style.display ='none'
        verificationDeFirst = true
    }
})
/* CHECKING OF LASTNAME INPUT */
inputLastName.addEventListener('input', (e) => {
    if(e.target.value.length <= 2) {
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
        errorMessage[2].style.display ='inline'
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

        alert(('Votre réservationé été reçue.'))    // CONFIRMATION APRES SOUMISSION DU FORMULAIRE
    } else {

    alert("Merci de bien remplir votre inscription"); // Alert box pour informer l'utilisateur à remplir correctement le formulaire
    e.preventDefault()  // Stop le comportement par défaut de l'envoi du formulaire
    }       // lOG INFOS ENTREES PAR UTILISATEUR FAIRE AU LIEU D'UEN ALERTE
})
}
