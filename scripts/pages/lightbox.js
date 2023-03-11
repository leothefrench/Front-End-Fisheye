
function lightbox(data) {
    console.log(data) // RETOURNE BIEN LES DATAS DU PHOTOGRAPHE ET SES MEDIAS

    const {id, photographerId, title, image, video, likes, date, price}  = data
    const images = `assets/photographers/${image}`;

    // console.log(images)

    const videoSource = `assets/photographers/${video}`;
    // console.log(videoSource)

    // CREATION DU MODELE DE LA GALERIE DES DIAPOSITIVES APRES LE CLIC SUR UNE DES IMAGES OU PHOTOS

    // CREATION DE LA DIV GLOBALE QUI VA CONTENIR MES 3 DIV (BOUTON LEFT & IMAGES 1 BOUTON RIGHT)
    const divContent = document.createElement('div')
    divContent.classList.add('content')
    divContent.setAttribute('tabindex', '0')
  
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
        linkImgCarrousel.setAttribute('tabindex', '0')   

        // console.log(image)

      //CREATION DE L'IMAGE OU DE LA VIDEO QUI SERA CLIQUABLE POUR LANCER LA LIGHTBOX
    if(image !== undefined) {
            const imageCenter = document.createElement('img')
            imageCenter.classList.add('photoOuVideo')
            imageCenter.setAttribute('src', images)
            imageCenter.style.width = '80vw'
            imageCenter.style.height = '80vh'
            imageCenter.setAttribute('alt', 'why-not')

            const titleImage = document.createElement('h3')
            titleImage.classList.add('titleImage')
            titleImage.textContent= `${title}`
            // imageCenter.setAttribute('src', videoSource)
            linkImgCarrousel.appendChild(imageCenter)
            linkImgCarrousel.appendChild(titleImage)
            carrouselImage.appendChild(linkImgCarrousel) // AJOUT DU LIEN LINKIMGCARROUSEL A LA DIV CARROUSEL IMAGE

    } else { 
            const videoPhoto = document.createElement('video')
            videoPhoto.classList.add('photoOuVideo')
            videoPhoto.setAttribute('src', videoSource)
            videoPhoto.setAttribute('type', 'video/mp4')
            videoPhoto.style.width = '80vw'
            videoPhoto.style.height = '80vh'

            const titleImage = document.createElement('h3')
            titleImage.classList.add('titleImage')
            titleImage.textContent = `${title}`

            linkImgCarrousel.appendChild(videoPhoto)
            linkImgCarrousel.appendChild(titleImage)

            carrouselImage.appendChild(linkImgCarrousel) // AJOUT DU LIEN LINKIMGCARROUSEL A LA DIV CARROUSEL IMAGE         
    }

            divContent.appendChild(carrouselImage) // AJOUT DIV CONTENANT L'IMAGE & LE TITRE H3

            // DIV FOR RIGHT BUTTON
            let divRightButton =  document.createElement('div')
            divRightButton.classList.add('divRightButton')
            divRightButton.setAttribute('tabindex', '0')

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

    // LIGHTBOX

    const listeImg = data;  // Liste des médias
console.log(listeImg) // OK MEDIA DU PHOTOGRAPHE SUR LA PAGE


    let myBox = new Lightbox(data);
    console.log(myBox) // PASSE BIEN EN PARAMETRE 2 UN ARRAYS DES MEDIAS

    document.querySelectorAll('.div-lien').forEach((el) => { 
        el.addEventListener('click', (e) => {
            console.log(e.currentTarget.dataset.id)
              
            myBox.show(e.currentTarget.dataset.id);   
                     
        })
    })
    return divContent;
}

