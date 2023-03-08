       function comptageLike() {

       // CREATION DE LA FONCTION POUR LE COMPTAGE DES LIKES
        const buttons = document.querySelectorAll('.heart-link') // CIBLAGE DES PARAGRAPHES CONTENANT LE NOMBRE (SERA NOTRE COUNTER)

        buttons.forEach((button) => { 
            button.addEventListener('click', handleButtonClick)                         
        });

        function handleButtonClick(event) {

            const button = event.currentTarget;
            let isLiked = button.getAttribute('data-isliked');

            // console.log(button)
            
            const counter = button.parentElement.children[0]
            let count = parseInt(counter.textContent)

            const globalCounter = document.querySelector('.counter')
            let countGlobal = parseInt(globalCounter.textContent)
            // countGlobal.textContent = sumArrayOfNumbers() // CODAGE DE CETTE FUNCTION POUR AVOIR LE TOTAL DES LIKES DU DEPART

            // console.log(isLiked)
            // console.log(typeof (isLiked))

            if(isLiked == "true"){
                // alert('POUF')
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

            // console.log(globalCounter)
        }

        // RECUPERATION DES PARAGRAPHES CONTENANT LES NOMBRES DE LIKES
        const counterParagraphOfLikes = document.querySelectorAll('.paragraph-icon') /*  ATTENTION UN SEUL CLIC ADMISSIBLE PAR ICON */

        let total = 0;
        counterParagraphOfLikes.forEach((paragraphe) => {
            let numberValue = parseInt(paragraphe.innerText, 10)
            total += numberValue;
         })
        // AJOUT AU COMPTEUR DES LIKES EN BAS DE PAGE
        let countBottom = document.querySelector('.counter')
        countBottom.innerText = `${total}`
    }
       

