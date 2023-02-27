       function comptageLike(data) {

       // CREATION DE LA FONCTION POUR LE COMPTAGE DES LIKES
        const buttons = document.querySelectorAll('.heart-link') // CIBLAGE DES PARAGRAPHES CONTENANT LE NOMBRE (SERA NOTRE COUNTER)

        // TRANSFORMATION DE LA NODELIST buttons EN ARRAY AVEC ARRAY.From & STOCKAGE DANS UNE NOUVELEL VARIABLE
        // const arrayButtons = Array.from(buttons)
        // console.log(arrayButtons)
        

        // function sumArrayOfNumbers(numbersArray) {

        //     for(let n of numbersArray) {
        //         console.log(n)
        //         let totalLikes = 0;
        //         totalLikes += n;
        //     }
        //     return totalLikes;
        // }   
        // sumArrayOfNumbers(arrayButtons)
        // console.log(totalLikes) // BUG BUG NOT DEFINE
        
        
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
    }
       
  