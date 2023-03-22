
function lightbox(data) {
 
const divContent = document.createElement('div')

    let checkContent = document.querySelector('.content')
    if(!checkContent) {

    divContent.classList.add('content')
    divContent.setAttribute('tabindex', '0')
    divContent.setAttribute('aria-label', 'image closeup view')
  
    // DIV LEFT FOR LEFT BUTTON
            let divLeftButton =  document.createElement('div')
            divLeftButton.classList.add('divLeftButton')
            
            let leftButton = document.createElement('button')
            leftButton.classList.add('previous')
            leftButton.setAttribute('tabindex', '0')
            let leftIconSpan = document.createElement('span')
            leftIconSpan.innerHTML = `<i class="fas fa-angle-left"></i>`
            leftButton.appendChild(leftIconSpan)

            divLeftButton.appendChild(leftButton)

            let lightbox = document.querySelector('.lightbox') // CIBLAGE CLASS DANS LE FICHIER PHOTOGRAPHER.HTML
            divContent.appendChild(divLeftButton) // AJOUT DIV CONTENANT LA LEFT ARROW FOR PREVIOUS FUNCTION

            // DIV CENTER IMAGE CARROUSEL & TITLE H3
            let carrouselImage = document.createElement('div')
            carrouselImage.classList.add('carrouselImage')

    // FAIRE LA CREATION D'UN LIEN QUI CONTENDRA L'IMAGE - PUIS ON AJOUTE L'IMAGE OU LA VIDEO A CE LIEN

        // CREATION DU LIEN QUI CONTIENDRA LA PHOTO CLIQUABLE POUR LANCER LA LIGHTBOX
        const linkImgCarrousel =  document.createElement('a')
        const linkImgCarrou = '#'
        linkImgCarrousel.setAttribute('href', linkImgCarrou)   

            carrouselImage.appendChild(linkImgCarrousel) // AJOUT DU LIEN LINKIMGCARROUSEL A LA DIV CARROUSEL IMAGE  
            divContent.appendChild(carrouselImage) // AJOUT DIV CONTENANT L'IMAGE & LE TITRE H3

            // DIV FOR RIGHT BUTTON
            let divRightButton =  document.createElement('div')
            divRightButton.classList.add('divRightButton')

            const divCloseButton = document.createElement('div')
            divCloseButton.classList.add('divCloseButton')
            let btnCloseLightbox = document.createElement('button')
            btnCloseLightbox.setAttribute('tabindex', '0')
            btnCloseLightbox.classList.add('closeLightbox')
            btnCloseLightbox.textContent = 'x'
            divCloseButton.appendChild(btnCloseLightbox)

            const divInterneRightButton = document.createElement('div')
            divInterneRightButton.classList.add('divInterneRightButton')
            let rightButton = document.createElement('button')
            rightButton.setAttribute('tabindex', '0')
            rightButton.classList.add('next')
            divInterneRightButton.appendChild(rightButton)

            divRightButton.appendChild(divCloseButton)
            divRightButton.appendChild(divInterneRightButton)
            let rightIconSpan = document.createElement('span')
            rightIconSpan.innerHTML = `<i class="fas fa-angle-right"></i>`
            rightButton.appendChild(rightIconSpan)

            divContent.appendChild(divRightButton) // AJOUT DIV CONTENANT LA RIGHT ARROW FOR NEXT FUNCTION
        
            lightbox.appendChild(divContent)

    }
    // LIGHTBOX
    let myBox = new Lightbox(data);

    document.querySelectorAll('.div-lien').forEach((el) => { 
        el.addEventListener('click', (e) => {            
            myBox.show(e.currentTarget.dataset.id);                   
        })
    })
    return divContent;
}

