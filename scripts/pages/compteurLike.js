       function comptageLike(data) {

       // CREATION DE LA FONCTION POUR LE COMPTAGE DES LIKES
        const buttons = document.querySelectorAll('.heart-link') // CIBLAGE DES PARAGRAPHES CONTENANT LE NOMBRE (SERA NOTRE COUNTER)

        buttons.forEach((button) => { 
            button.addEventListener('click', handleButtonClick)                         
        });

        function handleButtonClick(event) {

            const button = event.currentTarget;
            let isLiked = button.getAttribute('data-isLiked');
            
            const counter = button.parentElement.children[0]
            let count = parseInt(counter.textContent)

            const globalCounter = document.querySelector('.counter')
            let countGlobal = parseInt(globalCounter.textContent)
            // countGlobal.textContent = sumArrayOfNumbers()

            if(isLiked === true ){
                count--;
                countGlobal--;
                button.setAttribute('data-isLiked', false)
            } else {
                count++;
                countGlobal++;
                button.setAttribute('data-isLiked', true)
            }

            counter.textContent = `${count}`;
            globalCounter.textContent = `${countGlobal}`
        }


        // RECUPERATION DES PARGAGRAPHES CONTENANT LES NOMBRES DE LIKES
        const counterParagraphOfLikes = document.querySelectorAll('.paragraph-icon')
        console.log(counterParagraphOfLikes)

        counterParagraphOfLikes.forEach((paragraphe) => {
            let numberValue = parseInt(paragraphe.innerText, 10)
            console.log(numberValue) // VALEUR lES UNES APRES LES AUTRES
        })


        // AJOUT AU COMPTEUR DES LIKES EN BAS DE PAGE
        let countBottom = document.querySelector('.counter')
        // countBottom.innerText = ''
    }
       
  