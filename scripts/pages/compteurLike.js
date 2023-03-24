function comptageLike() {

    // CREATION DE LA FONCTION POUR LE COMPTAGE DES LIKES
    const buttons = document.querySelectorAll('.heart-link') // CIBLAGE DES PARAGRAPHES CONTENANT LE NOMBRE (SERA NOTRE COUNTER)

    buttons.forEach((button) => { 
        button.addEventListener('click', handleButtonClick)                         
    });

    function handleButtonClick(event) {

        const button = event.currentTarget;
        let isLiked = button.getAttribute('data-isliked');
            
        const counter = button.parentElement.children[0]
        let count = parseInt(counter.textContent)

        const globalCounter = document.querySelector('.counter')
        let countGlobal = parseInt(globalCounter.textContent)

        if(isLiked == "true"){
            count--;
            countGlobal--;
            button.setAttribute('data-isliked', false)
            
        } else {
            count++;
            countGlobal++;
            button.setAttribute('data-isliked', true)
        }

        counter.textContent = `${count}`;
        globalCounter.textContent = `${countGlobal}`
    }

    // RECUPERATION DES PARAGRAPHES CONTENANT LES NOMBRES DE LIKES
    const counterParagraphOfLikes = document.querySelectorAll('.paragraph-icon') /*ATTENTION UN SEUL CLIC ADMISSIBLE PAR ICON */

    let total = 0;
    counterParagraphOfLikes.forEach((paragraphe) => {
        let numberValue = parseInt(paragraphe.innerText, 10)
        total += numberValue;
        })
    // AJOUT AU COMPTEUR DES LIKES EN BAS DE PAGE
    let countBottom = document.querySelector('.counter')
    countBottom.innerText = `${total}`
}
       
function countGlobalLikes() {
    const divBottom = document.querySelector('.bottomHeart')

    const divNumberLikes = document.createElement('div')
    divNumberLikes.classList.add('count-likes')

    // PARAGRAPHE NUMBER LIKES & ICON IN SPAN
    const numberLikes = document.createElement('p')
    numberLikes.setAttribute('role', 'paragraph')
    numberLikes.classList.add('counter')
    numberLikes.textContent = '0'

    const iconLikes = document.createElement('span')
    iconLikes.innerHTML = '<i class="fa-solid fa-heart"></i>'

    const tarifJour = document.createElement('p')
    tarifJour.classList.add('tarif-jour')
    tarifJour.textContent = '300€ / jour'

    divNumberLikes.appendChild(numberLikes)
    divNumberLikes.appendChild(iconLikes)

    divBottom.appendChild(divNumberLikes)
    divBottom.appendChild(tarifJour)
}
