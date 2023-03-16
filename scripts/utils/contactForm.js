
function formulaire(data) {

    // console.log(data)
    let name = data[0].name;
    // console.log(name)

    const divFormulaireBloc = document.querySelector('.formulaireBloc')
    divFormulaireBloc.setAttribute('tabindex', '0')
    divFormulaireBloc.setAttribute('id', 'contact_modal')
    divFormulaireBloc.classList.add('modal')
    divFormulaireBloc.setAttribute('aria-hidden', 'true')
    divFormulaireBloc.setAttribute('aria-describedby', 'modalTitle')
    divFormulaireBloc.setAttribute('role', 'dialog')

    // console.log(divFormulaireBloc) // OKAY

    // DIV CONTENANT LA DIV HEADER & DIV FORMULAIRE
    const divHeaderFormulaire = document.createElement('div')
    divHeaderFormulaire.classList.add('divHeaderFormulaire')
    divHeaderFormulaire.setAttribute('tabindex', '0')
    divFormulaireBloc.appendChild(divHeaderFormulaire)

     // CREATION DU HEADER CONTENANT LE H2
    const headerH2 = document.createElement('header')

    // H2 CONTACTEZ MOI
    const headerContactezMoi = document.createElement('h2')
    headerContactezMoi.setAttribute('id', 'modalTitle')
    headerContactezMoi.setAttribute('tabindex', '0')
    headerContactezMoi.classList.add('modal-title')
    headerContactezMoi.textContent = `Contactez moi ${name}`

    // FOCUS SUR LE TITRE DE LA MODALE DE CONTACT
    document.querySelector('.contact_button').addEventListener('click', () => {
        headerContactezMoi.focus()
    })
    
    headerH2.appendChild(headerContactezMoi)

    divHeaderFormulaire.appendChild(headerH2)

    divFormulaireBloc.appendChild(divHeaderFormulaire)

    // DIV CONTENANT LE FORMULAIRE & BOUTON CONTACT
    const divFormulaire = document.createElement('div')
    divFormulaire.classList.add('divFormulaire')

    const formulaire = document.createElement('form')
    formulaire.classList.add('formulaireDeContact')
    // divFormulaire.appendChild(formulaire)

    // LABEL PRENOM
    const labelPrenom = document.createElement('label')
    labelPrenom.textContent = 'Prénom'
    labelPrenom.setAttribute('for', 'prenom')
    labelPrenom.setAttribute('tabindex', '0')
    formulaire.appendChild(labelPrenom) // AJOUT LABEL PRENOM DANS FORMULAIRE
    // INPUT PRENOM
    const inputPrenom = document.createElement('input')
    inputPrenom.setAttribute('type', 'text')
    inputPrenom.setAttribute('id', 'prenom')
    inputPrenom.classList.add('firstName-input')
    inputPrenom.setAttribute('aria-label', "Entrez votre prenom")
    inputPrenom.setAttribute('aria-required', 'true')
    formulaire.appendChild(inputPrenom) // AJOUT INPUT PRENOM DANS FORMULAIRE
    // SPAN PRENOM POUR LE MESSAGE D'AVERTISSEMENT
    const spanPrenom = document.createElement('span')
    spanPrenom.classList.add("message-error")
    formulaire.appendChild(spanPrenom) // AJOUT SPAN PRENOM DANS FORMULAIRE

    // LABEL NOM
    const labelNom = document.createElement('label')
    labelNom.textContent = 'Nom'
    labelNom.setAttribute('for', 'nom')
    labelNom.setAttribute('tabindex', '0')
    formulaire.appendChild(labelNom) // AJOUT LABEL NOM DANS FORMULAIRE
    // INPUT NOM
    const inputNom = document.createElement('input')
    inputNom.setAttribute('type', 'text')
    inputNom.setAttribute('id', 'nom')
    inputNom.classList.add('lastName-input')
    inputNom.setAttribute('aria-label', "Entrez votre nom")
    inputNom.setAttribute('aria-required', 'true')
    formulaire.appendChild(inputNom) // AJOUT INPUT NOM DANS FORMULAIRE
    // SPAN NOM POUR LE MESSAGE D'AVERTISSEMENT
    const spanNomFormulaire = document.createElement('span')
    spanNomFormulaire.classList.add("message-error")
    formulaire.appendChild(spanNomFormulaire) // AJOUT SPAN NOM DANS FORMULAIRE

    // LABEL EMAIL
   const labelEmail = document.createElement('label')
    labelEmail.textContent = 'Email'
    labelEmail.setAttribute('for', 'email')
    labelEmail.setAttribute('tabindex', '0')
    formulaire.appendChild(labelEmail) // AJOUT LABEL EMAIL DANS FORMULAIRE
    // INPUT EMAIL
    const inputEmail = document.createElement('input')
    inputEmail.setAttribute('type', 'email')
    inputEmail.setAttribute('name', 'email')
    inputEmail.setAttribute('id', 'email')
    inputEmail.classList.add('email-input')
    inputEmail.setAttribute('aria-label', "Entrez votre email")
    inputEmail.setAttribute('aria-required', 'true')
    formulaire.appendChild(inputEmail) // AJOUT INPUT EMAIL DANS FORMULAIRE
    // SPAN EMAIL POUR LE MESSAGE D'AVERTISSEMENT
    const spanEmail = document.createElement('span')
    spanEmail.classList.add("message-error")
    formulaire.appendChild(spanEmail) // AJOUT SPAN EMAIL DANS FORMULAIRE

    // LABEL POUR MESSAGE A ENVOYER
    const labelMessage = document.createElement('label')
    labelMessage.textContent = 'Message'
    labelMessage.setAttribute('for', 'message')
    labelMessage.setAttribute('tabindex', '0')
    formulaire.appendChild(labelMessage) // AJOUT LABEL MESSAGE DANS FORMULAIRE
    // TEXTAREA
    const textareaMessage = document.createElement('textarea')
    textareaMessage.setAttribute('name', 'message')
    textareaMessage.setAttribute('id', 'message')
    textareaMessage.setAttribute('cols', '43')
    textareaMessage.setAttribute('rows', '10')
    textareaMessage.setAttribute('rows', '10')
    textareaMessage.classList.add('msg-input')
    textareaMessage.setAttribute('aria-multiline', 'true')
    textareaMessage.setAttribute('aria-required', 'true')
    formulaire.appendChild(textareaMessage) // AJOUT TEXTAREA
    // SPAN MESSAGE POUR LE MESSAGE D'AVERTISSEMENT
    const spanMessage = document.createElement('span')
    spanMessage.classList.add("message-error")
    formulaire.appendChild(spanMessage)

    // BOUTON CONTACT DANS LE FORMULAIRE
    const boutonContact = document.createElement('button')
    boutonContact.classList.add('contact_button')
    boutonContact.setAttribute('type', 'submit')
    boutonContact.setAttribute('aria-label', 'Bouton pour envoyer le messsage')
    boutonContact.textContent = "Envoyer"
    formulaire.appendChild(boutonContact)

    divFormulaire.appendChild(formulaire)
    divFormulaireBloc.appendChild(divFormulaire)


    // BOUTON POUR CLOSE MODAL
    const buttonCloseModal = document.createElement('button')
    buttonCloseModal.classList.add('modal-close-btn')
    buttonCloseModal.setAttribute('onclick', 'closeModal()')

   //  console.log(buttonCloseModal)

    const imgCloseButton = document.createElement('img')
    imgCloseButton.setAttribute('src', 'assets/icons/close.svg')
    imgCloseButton.setAttribute('tabindex', '-1')
    imgCloseButton.setAttribute('alt', 'Close Contact form')
    imgCloseButton.setAttribute('aria-label', 'Boutton de fermeture du formulaire de contact')
    buttonCloseModal.appendChild(imgCloseButton)


    divFormulaire.appendChild(formulaire)
    divFormulaire.appendChild(buttonCloseModal)


    divFormulaireBloc.appendChild(divFormulaire)
// }

// DECLARATION DES VARIABLES POUR LE CHECKING
const body = document.querySelector('body')
const openModalBtn = document.querySelector('.open-modal-btn') // OPEN BUTTON MODAL
const main = document.getElementById('main')

// console.log(main)

const modal = document.querySelector('.formulaireBloc')
// const modalTitle = document.getElementById('modalTitle')
const modalCloseBtn = document.querySelector('.modal-close-btn')


// console.log(modalCloseBtn)


// EVENT LISTENER FOR OPENING THE MODAL
openModalBtn.addEventListener('click', displayModal);

// FUNCTION DISPLAY MODAL
function displayModal() {
   main.setAttribute('aria-hidden', 'true')
   modal.setAttribute('aria-hidden', 'false')
   body.classList.add('no-scroll')
   modal.style.display = 'flex'
   modal.focus()
}

// EVENT LISTENER FOR CLOSING THE MODAL
modalCloseBtn.addEventListener('click', closeModal)

function closeModal() {
   main.setAttribute('aria-hidden', 'false')
   modal.setAttribute('aria-hidden', 'true')
   body.classList.remove('no-scroll')
   modal.style.display = 'none'
   openModalBtn.focus()
}

// CLOSE MODAL WHEN SPACE BAR (ESCAPE) KEY IS PRESSED

window.addEventListener('keydown', e => {
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

    // console.log(errorMessage) // OKAY NODE LIST


// DECLARATION VARIABLE QUI CONTIENDRONT LE BOOLEEN DE CHECKING
let verificationDeFirst
, verificationDeLast
, verificationEmail
, verificationMsg;

/* CHECKING OF FIRSTNAME INPUT */
inputFirstName.addEventListener('input', (e) => {
    if(e.target.value.length <= 2) {
        // console.log(e.target.value.length)
        errorMessage[0].style.display = 'inline'
        inputFirstName.classList.add('echec')
        inputFirstName.classList.add('border')

    errorMessage[0].innerText = "Veuillez entrer 2 caractères minimum"
    errorMessage[0].style.color = 'red';
    errorMessage[0].style.fontSize = '1rem'
        verificationDeFirst = false
    } else {

    errorMessage[0].innerText = 'Champs valide'
    errorMessage[0].style.color = 'green'
    errorMessage[0].style.fontSize = '1rem'
    errorMessage[0].style.display ='inline'
        verificationDeFirst = true
    }
})
/* CHECKING OF LASTNAME INPUT */
inputLastName.addEventListener('input', (e) => {
    if(e.target.value.length <= 2) {
        errorMessage[1].style.display = 'inline'
        inputFirstName.classList.add('echec')
        inputFirstName.classList.add('border')

    errorMessage[1].innerText = "Veuillez entrer 2 caractères minimum"
    errorMessage[1].style.color = 'red';
    errorMessage[1].style.fontSize = '1rem'
        verificationDeLast = false
    } else {
    errorMessage[1].innerText = 'Champs valide'
    errorMessage[1].style.color = 'green'
    errorMessage[1].style.fontSize = '1rem'
    errorMessage[1].style.display ='inline'
        verificationDeLast = true
    }
})
/* CHECKING OF EMAIL INPUT */
inputEmail.addEventListener('input', (e) => {
    const regexEmail = /\S+@\S+\.\S+/
    if(e.target.value.search(regexEmail) === 0) {

    errorMessage[2].innerText = 'Champs valide'
    errorMessage[2].style.color = 'green'
    errorMessage[2].style.fontSize = '1rem'      
    errorMessage[2].style.display = 'inline'

        verificationEmail = true
    } else {
        errorMessage[2].style.display ='inline'
        inputEmail.classList.add('echec')
        inputEmail.classList.add('border')

    errorMessage[2].innerText = "Entrez Email Correct"
    errorMessage[2].style.color = 'red';
    errorMessage[2].style.fontSize = '1rem'

        verificationEmail = false
    }
})
/* CHECKING OF MESSAGE INPUT */
inputMsg.addEventListener('input', (e) => {
    if(e.target.value.length == 0) {
        errorMessage[3].style.display = 'inline'
        errorMessage[3].innerText = 'Champs invalide'
        errorMessage[3].style.color = 'red';
        errorMessage[3].style.fontSize = '1rem'
        inputFirstName.classList.add('echec')
        inputFirstName.classList.add('border')

        verificationMsg = false
    } else {
    errorMessage[3].innerText = 'Champs valide'
    errorMessage[3].style.color = 'green'
    errorMessage[3].style.fontSize = '1rem'      
    errorMessage[3].style.display = 'inline'
        verificationMsg = true
    }
})

/* SUBMIT */
document.querySelector('.modal').addEventListener('submit', (e) => {
    e.preventDefault() // EVITE LE CHARGEMENT PAR DEFAUT DE LA PAGE LORS DU SUBMIT
    /* SI TOUTES LES VERIFICATIONS A TRUE ON FAIT CE QUI SUIT */
    if(verificationDeFirst === true && verificationDeLast === true && verificationEmail === true && verificationMsg === true) {

        alert('Votre réservationé été reçue.')    // CONFIRMATION APRES SOUMISSION DU FORMULAIRE

// LOGGING DES DONNEES ENTREES PAR L'UTILISATEUR
        // let formData = document.querySelector('.formulaireDeContact') // CIBLAGE FORMULAIRE

    // let inputFirstNameValue = null;
    // let inputLastNameValue = null;
    // let inputEmailValue = null;
    // let inputMsgValue = null;
    
    console.log(inputFirstName.value,inputLastName.value, inputEmail.value, inputMsg.value)

    } else {

    alert("Merci de bien remplir votre inscription"); // Alert box pour informer l'utilisateur à remplir correctement le formulaire
    e.preventDefault()  // Stop le comportement par défaut de l'envoi du formulaire
    }    
    
    // lOG INFOS ENTREES PAR UTILISATEUR FAIRE AU LIEU D'UNE ALERT


    })
}
    verificationModal()
}
