       function comptageLike(data) {

       // CREATION DE LA FONCTION POUR LE COMPTAGE DES LIKES
        const buttons = document.querySelectorAll('.heart-link') // CIBLAGE DES PARAGRAPHES CONTENANT LE NOMBRE (SERA NOTRE COUNTER)
        let countLikes = document.querySelectorAll('.paragraph-icon')
        let counter = 0

        console.log(buttons)
        // console.log(heartLink)

        buttons.forEach((button) => { 
            button.addEventListener('click', handleButtonClick)                         
        })

        function handleButtonClick(event) {
            // console.log(event.currentTarget) // OK RETOURNE BIEN LE BOUTON QUI PREND LE CLICK
            let targetParagraphCounter = event.currentTarget;
            console.log(targetParagraphCounter)

            countLikes = counter++;
            console.log(countLikes)
            countLikes.textContent = `${counter}`;
        }
    }
       
       