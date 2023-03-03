
function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        // CREATION DIV CONTENANT L'IMAGE & LE H2
        const divPhotoH2 = document.createElement('div')
        divPhotoH2.classList.add('divPhotoH2')

        // CREATION IMAGE (avec src & alt) - 
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute('alt', '')   

        // CREATION H2 DE L'IMAGE
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        // CREATION LIEN SUR DIVPHOTOH2
        const aTag = document.createElement('a')                       
        let link ='photographer.html'
        link += `?id=${id}` 
        aTag.setAttribute('id', id) 
        aTag.setAttribute('href', link) 
        aTag.style.textDecoration = "none"       
        // AJOUT AU PARENT
        aTag.appendChild(img);
        aTag.appendChild(h2)
        divPhotoH2.appendChild(aTag)
        article.appendChild(divPhotoH2)

        // CREATION DIV DES PARAPGRAPHES SOUS PHOTOS
        const divParagraphPhoto = document.createElement('div')

        // CREATION DES 3 PARAGRAPHES & AJOUT CLASS & CONTENU
        const paragraphOne = document.createElement('p')    
        paragraphOne.classList.add('paragraphOne')          
        paragraphOne.textContent = `${city}, ${country}`    

        const paragraphTwo = document.createElement('p')    
        paragraphTwo.classList.add('paragraphTwo')          
        paragraphTwo.textContent = tagline;                

        const paragraphThree = document.createElement('p')
        paragraphThree.classList.add('paragraphThree')
        paragraphThree.textContent = `${price}€/jour`

        divParagraphPhoto.appendChild(paragraphOne)
        divParagraphPhoto.appendChild(paragraphTwo)
        divParagraphPhoto.appendChild(paragraphThree)

        article.appendChild(divParagraphPhoto)

        return (article);
    }
    return { name, picture, id, city, country, tagline, price, getUserCardDOM }
}
