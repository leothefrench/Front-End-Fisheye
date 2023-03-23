
async function getPhotographers() {             // FONCTION POUR RECUPERER DATA DES PHOTOGRAPHES   
    const requete = await fetch('./data/photographers.json'); // RECUPERATION DATA AU FORMAT JSON
    let data = await requete.json();
    const photographers = data.photographers;   // RECUPERATION DATA DU PHOTOGRAPHE
    console.table(photographers)                  // CONSOLE.LOG DATA FOR CHECKING
    return {                                    // RETURN DATA PHOTOGRAPHERS 
        photographers: [...photographers]
        } 
    }

async function displayData(photographers) {     // PASSAGE EN PARAMETRE DES DONNEES DE L'ENSEMBLE DES PHOTOGRAPHES
    const photographersSection = document.querySelector(".photographer_section"); // CIBLAGE DIV AYANT POUR NOM DE CLASSE .PHOT... QUI SERA L'ENDROIT OU LE JS SERA INJECTE PAR LA FACTORY

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer); // PASSAGE DES DATAS DES PHOTOGRAPHES DANS LA FACTORY
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    const { photographers } = await getPhotographers();     // RECUPERATION DES DATAS DES PHOTOGRAPHES
    displayData(photographers);                             // FONCTION DISPLAY QUI VA AFFICHER CE QUE LA FACTORY VA PRODUIRE 
}
    
init(); // LANCEMENT DE LA FONCTION INITIALISATION
