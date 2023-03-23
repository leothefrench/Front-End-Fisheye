
function getPhotographerId() {  // FONCTION DE RECUPERATION ID PHOTOGRAPHE QUE L'UTILISATEUR A SELECTIONNE
    return new URL(location.href).searchParams.get('id') 
}

async function getPhotographer(photographerId) {    // ICI LE PARAMETRE SERA L'ID DU PHOTOGRAPHE QUE L'UTILISATEUR A CHOISI
    const requete = await fetch(`./data/photographers.json`); // RECUPERATION DE TOUTES LES DATAS AU FORMAT JSON
    let data = await requete.json();
    let photographers = data.photographers;

    let media = data.media.filter(media => {
        return media.photographerId == photographerId;
    })

    photographers = photographers.filter(person => {
        return person.id == photographerId;
    })   
    return {                                     
        photographers, media   // DATA PHOTOGRAPH & MEDIA LUI CORRESPONDANT
    } 
}

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
        h2.setAttribute('tabindex', '0')
        photographerProfile.appendChild(h2)

        // CREATION DIV CONTENANT LES 2 PARAGRAPHES
        const divParagrah = document.createElement('div')
        divParagrah.setAttribute('tabindex', '0')

        // CREATION DES 2 PARAGRAPHES
        const paragraphOne = document.createElement('p')   
        paragraphOne.classList.add('paragraphOne')           
        paragraphOne.textContent = `${city}, ${country}`    

        const paragraphTwo = document.createElement('p')    
        paragraphTwo.classList.add('paragraphTwo')          
        paragraphTwo.textContent = tagline;     
        
        divParagrah.appendChild(paragraphOne)
        divParagrah.appendChild(paragraphTwo)

        photographerProfile.appendChild(divParagrah)

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

        return (section);
    }
    return { name, picture, id, city, country, tagline, price, getUserCardDOM }
}



function displayData(photographers) {     // POUR INEJECTER LES DONNEES DANS LE FICHIER PHOTOGRAPHER.HTML
    const photographHeader =  document.querySelector('.photograph-header') // CIBLAGE CLASSE OU LE JS SERA INJECTE
    const globalPhotos = document.querySelector('.globalPhotos')
    
    const photographerInfo = infoDisplay(photographers.photographers[0])
    const photographerCard = photographerInfo.getUserCardDOM()       // INJECTION JS DU MODEL DANS LE HTML
    photographHeader.appendChild(photographerCard) 
                    
    photographers.media.forEach(media => {
        const photographerModel = factoryMedia(media);
        const userCardDOM = photographerModel.getUserCardDOM();
        globalPhotos.appendChild(userCardDOM); 

    });
}

async function init() {

    const photographerId = getPhotographerId()  // ID RECUPERE PAR URL
    const photographer = await getPhotographer(photographerId) // RETOURNE DEUX OBJETS (Photographer &  médias possèdant le même id)

    displayData(photographer);
    dropDownMenu(photographer)
  countGlobalLikes() 

    comptageLike(photographer)

 
    formulaire(photographer.photographers)
}
    
init();