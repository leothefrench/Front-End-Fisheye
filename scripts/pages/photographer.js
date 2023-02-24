
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
    // console.log(media) // POUR VERIFIER QUE L'ON A LES MEDIAS CORRESPOND A L'ID DU PHOTOGRAPHE QUI A RECU LE CLIC UTILISATEUR

    photographers = photographers.filter(person => {
        return person.id == photographerId;
    })   
    // console.log(photographers)   // POUR VERIFICATION QUE L'OBJET RETOURNE EST CORRECT AVEC LE PHOTOGRAPHE SELECTIONNE
    return {                                     
        photographers, media   // DATA PHOTOGRAPH & MEDIA LUI CORRESPONDANT
    } 
}

function displayData(photographers) {     // POUR INEJECTER LES DONNEES DANS LE FICHIER PHOTOGRAPHER.HTML
    const photographHeader =  document.querySelector('.photograph-header') // CIBLAGE CLASSE OU LE JS SERA INJECTE
    const globalPhotos = document.querySelector('.globalPhotos')
 

    
    const photographerInfo = infoDisplay(photographers.photographers[0])
    const photograherCard = photographerInfo.getUserCardDOM()       // INJECTION JS DU MODEL DANS LE HTML
    photographHeader.appendChild(photograherCard) 
                    

    photographers.media.forEach(media => {
        const photographerModel = factoryMedia(media);
        // console.log(photographerModel)      // CHECK DE L'ENSEMBLE DES MEDIAS DU PHOTOGRAPHE SELECTIONNE
        const userCardDOM = photographerModel.getUserCardDOM();
        // console.log(userCardDOM)        // CHECK DES MEDIAS
        globalPhotos.appendChild(userCardDOM);

    });
}

async function init() {

    const photographerId = getPhotographerId()  // ID RECUPERE PAR URL
    // console.log(photographerId) // ON CHECK L'ID DU PHOTOGRAPHE RECEVANT LE CLIC UTILISATEUR SUR LA PAGE D'ACCUEIL
    const photographer = await getPhotographer(photographerId) // RETOURNE DEUX OBJETS (Photographer &  médias possèdant le même id)
    displayData(photographer);
    // console.log(photographer)       // AFFICHE LES 2 OBJETS OBTENU PAR LA FONCTION GETPHOTOGRAPHER

        dropDownMenu(photographer)
        comptageLike(photographer)
        lightbox(photographer)


};
    
init();