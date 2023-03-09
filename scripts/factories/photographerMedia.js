
function infoDisplay(data) {
    const { name, portrait, id, city, country, tagline, price} = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const section = document.createElement( 'section' );

        // CREATION DE LA DIV CONTENANT LE H2 & LES 2 PARAGRAHES
        const photographerProfile = document.createElement('div')
        
        // CREATION H2 DE L'IMAGE - NOM PHOTOGRAPHE    
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        photographerProfile.appendChild(h2)

        // CREATION DES 2 PARAGRAPHES
        const paragraphOne = document.createElement('p')   
        paragraphOne.classList.add('paragraphOne')          
        paragraphOne.textContent = `${city}, ${country}`    

        const paragraphTwo = document.createElement('p')    
        paragraphTwo.classList.add('paragraphTwo')          
        paragraphTwo.textContent = tagline;                 

        photographerProfile.appendChild(paragraphOne)
        photographerProfile.appendChild(paragraphTwo)

        // AJOUT DE LA DIV H2 & PARAGERAPHES A LA DIV PHOTOGRAPHER-PROFILE
        section.appendChild(photographerProfile)

        const buttonContact = document.querySelector('.contact_button')
        section.appendChild(buttonContact)

        // CREATION IMG TAG & ATTRIBUTS & STYLE
        const img = document.createElement( 'img' ); // IL FAUT COMPARER LE FORMAT - PHOTO OU IMAGE
        img.setAttribute("src", picture)
        img.setAttribute('alt', name)
        img.setAttribute('tabindex', '0')
        img.style.width = "200px"
        img.style.height = "200px"
        img.style.borderRadius = "50%"


        section.appendChild(img)
        // section.appendChild(videoMP4)

         return (section);
    }

    return { name, picture, id, city, country, tagline, price, getUserCardDOM }
}

// FONCTION POUR INJECTION ENSEMBLE PHOTOS
function factoryMedia(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    const images = `assets/photographers/${image}`;
    const videoSource = `assets/photographers/${video}`;

    function getUserCardDOM() {
               
        const article = document.createElement( 'article' );

        // CREATION DE LA DIV CONTENANT LA PHOTO
        const lightbox = document.createElement('div')
        lightbox.classList.add('isItYou')

        // CREATION DE LA DIV CONTENANT ANCHOR TAG & IMG
        const divLien = document.createElement('div')
        divLien.classList.add('div-lien')
        divLien.setAttribute('data-id', id)  // AJOUT ID SUR LES IMAGES
        
        // CREATION DU LIEN QUI CONTIENDRA LA PHOTO CLIQUABLE POUR LANCER LA LIGHTBOX
        const linkImg =  document.createElement('a')
        const link = '#'
        linkImg.setAttribute('href', link)     

        //CREATION DE L'IMAGE OU DE LA VIDEO QUI SERA CLIQUABLE POUR LANCER LA LIGHTBOX
        if(image !== undefined) {

        const imagesPhotographe = document.createElement('img')
        imagesPhotographe.classList.add('photoOuVideo')
        imagesPhotographe.setAttribute('src', images)
        imagesPhotographe.style.width = '350px'
        imagesPhotographe.style.height = '300px'
        imagesPhotographe.setAttribute('alt', title)
        
        linkImg.appendChild(imagesPhotographe)  // AJOUT IMAGE DANS LE LIEN
        divLien.appendChild(linkImg)

        } else {
            
        const videoPhotographe = document.createElement('video')
        videoPhotographe.classList.add('photoOuVideo')
        videoPhotographe.setAttribute('src', videoSource)
        videoPhotographe.setAttribute('type', 'video/mp4')
        videoPhotographe.style.width = '350px'
        videoPhotographe.style.height = '300px'
        
        linkImg.appendChild(videoPhotographe)  // AJOUT VIDEO DANS LE LIEN
        divLien.appendChild(linkImg)
        }

        lightbox.appendChild(divLien)           // AJOUT DU LIEN DANS LA LIGHTBOX

        // CREATION DE LA DIV CONTENANT LE H3 & DIV (P & ICON HEART)
        const divTitleAndHeart = document.createElement('div')

        // TITRE IMAGE - N° de TABULATION 10
        const titlePhoto = document.createElement('h3')
        titlePhoto.classList.add('h3-photo')
        titlePhoto.setAttribute('tabindex', '0')
        titlePhoto.textContent = `${title}`
        divTitleAndHeart.appendChild(titlePhoto)

        // CREATION DE LA DIV CONTENANT LE PARAGRAPHE (NBRE DE LIKES) & L'ICONE HEART
        const divLikes = document.createElement('div')

        // PARAGRAPHE NBRE LIKES
        const paragraphIcon = document.createElement('h4')       // MY COUNTER OF LIKES
        paragraphIcon.classList.add('paragraph-icon')
        paragraphIcon.setAttribute('data-set', id)
        paragraphIcon.setAttribute('tabindex', '0')
        paragraphIcon.setAttribute('aria-label', 'Nombre de likes')
        paragraphIcon.textContent = `${likes}`;

        // CREATION ICON BUTTON
        const iconButton = document.createElement('button')
        iconButton.classList.add('heart-link')  
        iconButton.setAttribute('data-isliked', false)  
        iconButton.setAttribute('data-set', id) // AJOUT ID SUR BOUTON
        iconButton.setAttribute('tabindex', '0')
        iconButton.setAttribute('role', 'button')
        iconButton.setAttribute('aria-label', 'Liker cette photo')


        
        const spanIcon = document.createElement('span')
        iconButton.innerHTML = '<i class="fa-solid fa-heart"></i>'
        spanIcon.appendChild(iconButton)

        // AJOUT PARAGRAPHE ICON & IMG ICON A LA DIV divTitleAndHeart
        divLikes.appendChild(paragraphIcon)
        divLikes.appendChild(iconButton)

        // divLikes.style.backgroundColor ='lightblue'
        divLikes.style.display ='flex'
        divLikes.style.alignItems = 'center'

        // AJOUT DE LA divLikes A LA divTitle and Heart
        divTitleAndHeart.appendChild(divLikes)

        divTitleAndHeart.style.display = 'flex'
        divTitleAndHeart.style.alignItems = 'baseline'
        // divTitleAndHeart.style.backgroundColor ='lightgreen'
        divTitleAndHeart.style.justifyContent ='space-between'

        // AJOUT divTitleAndHeart A LA DIV LIGHTBOX
        lightbox.appendChild(divTitleAndHeart)
        
        // divLightBox.appendChild(lightbox)
        article.appendChild(lightbox)

        return (article)
    }
    return { id, photographerId, title, image, likes, date, price, getUserCardDOM }
}


// CREATION DIV NBRE DE LIKES & ICON COEUR

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



