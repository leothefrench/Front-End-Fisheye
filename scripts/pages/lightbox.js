
function lightbox(data) {
    console.log(data)
   

    const { id, photographerId, title, image, video, likes, date, price } = data;

    const images = `assets/photographers/${image}`;


    const videoSource = `assets/photographers/${video}`;
console.log(images)
    console.log(videoSource) // LE UNDEFINED EST ICI MAIS POURQUOI DONC ?

    // CREATION DU MODELE DE LA GALERIE DES DIAPOSITIVES APRES LE CLIC SUR UNE DES IMAGES OU PHOTOS

    // CREATION DE MA DIV GLOBALE QUI VA CONTENIR MES 3 DIV
    const divContent = document.createElement('div')
    divContent.classList.add('content')
  
            // DIV LEFT FOR LEFT BUTTON
            let divLeftButton =  document.createElement('div')
            divLeftButton.classList.add('divLeftButton')
            
            let leftButton = document.createElement('button')
            leftButton.classList.add('previous')
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

        console.log(image)

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

            const divCloseButton = document.createElement('div')
            divCloseButton.classList.add('divCloseButton')
            let btnCloseLightbox = document.createElement('button')
            btnCloseLightbox.classList.add('closeLightbox')
            btnCloseLightbox.textContent = 'x'
            divCloseButton.appendChild(btnCloseLightbox)

            const divInterneRightButton = document.createElement('div')
            divInterneRightButton.classList.add('divInterneRightButton')
            let rightButton = document.createElement('button')
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

    const listeImg = data.media;  // Liste des médias
    console.log(listeImg)


    let myBox = new Lightbox(listeImg);
    console.log(myBox)

    document.querySelectorAll('.div-lien').forEach((el) => { 
        el.addEventListener('click', (e) => {
            console.log(e.currentTarget.dataset.id)
            myBox.show(e.currentTarget.dataset.id);                            
        })
    })
    return divContent;
}



 

