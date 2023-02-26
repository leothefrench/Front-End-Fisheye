       function comptageLike(data) {

       // CREATION DE LA FONCTION POUR LE COMPTAGE DES LIKES
        const buttons = document.querySelectorAll('.heart-link') // CIBLAGE DES PARAGRAPHES CONTENANT LE NOMBRE (SERA NOTRE COUNTER)
        // let countLikes = document.querySelector('.paragraph-icon') // CIBLAGE DU PARAGRAPHE QUI CONTIENT MON COMPTEUR 
        // let counter = 0

        console.log(buttons)
        // console.log(heartLink)

        buttons.forEach((button) => { 
            button.addEventListener('click', handleButtonClick)                         
        });

        function handleButtonClick(event) {
            console.log(event.currentTarget) // OK RETOURNE BIEN LE BOUTON QUI PREND LE CLICK

            const button = event.currentTarget;
            let isLiked = button.getAttribute('data-isLiked'); // CHECK GET ATTRIBUT
            
            const counter = button.parentElement.children[0]
            let count = parseInt(counter.textContent)

            if(isLiked === true ){
                count--;
                button.setAttribute('data-isLiked', false)
            } else {
                count++;
                button.setAttribute('data-isLiked', true)
            }

            counter.textContent = `${count}`;
        }
    }
       
       