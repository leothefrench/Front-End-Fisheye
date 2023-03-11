class Lightbox {
    constructor(listElement) {
        
        this._currentElement = null;
        this._listElement = listElement;

        this.manageEvent()
    }

    //POUR AFFICHER LA MODALE LORS DU CLIC UTILISATEUR 
    show(id) {
        this._currentElement = this.getElementById(id);
        console.log(this._currentElement)
        this.display();
        console.log(id); // OK RETOURNE BIEN L'ID DE L'IMAGE QUI A RECU LE CLICK 
    }
    // POUR AFFICHER L'IMAGE SUIVANTE
    next() {
        let index = this._listElement.findIndex(element => element.id == this._currentElement.id)

// console.log(index)

        if( index == this._listElement.length - 1) {
            this._currentElement = this._listElement[0] // POUR AVOIR UN RETOUR AU PREMIER INDEX UNE FOIS EN FIN DE CARROUSEL
        } else {
            this._currentElement = this._listElement[index + 1]
        }

        this.display();
    }
    // POUR AFFICHER L'IMAGE PRECEDENTE
    previous() {
        let index = this._listElement.findIndex(element => element.id == this._currentElement.id)

        if( index == this._listElement.length -1) {
            this._currentElement = this._listElement[0];
        } else {
            this._currentElement = this._listElement[index - 1];
        }

        this.display();
    }
    // POUR LA GESTION DES EVENEMENTS CLICKS
    manageEvent() {
        document.querySelector('.next').addEventListener('click', () => {
            this.next();
        })

        document.querySelector('.previous').addEventListener('click', () => {
            this.previous();
        })

        document.querySelector('.closeLightbox').addEventListener('click', () => {
            this.close()
        })
    }
    // POUR OBTENIR L'ID DE
   
    getElementById(id) {
          console.log(this._listElement)
         let idInListElement = this._listElement.find(element => element.id == id);

        

        return idInListElement;
    }


display() {
        const image = `assets/photographers/${this._currentElement.image}`
        
        const videoPhoto = `assets/photographers/${this._currentElement.video}`

        const imageCarrousel = `${this._currentElement.title}`
        console.log(imageCarrousel)

        
        if (this._currentElement.image) { 
            const img = document.createElement('img')
            img.setAttribute('src', image)
            img.setAttribute('width', '55%')
            img.setAttribute('tabindex', '0')
            document.querySelector('.carrouselImage a').innerHTML = ''
            document.querySelector('.carrouselImage a').append(img)

            const titleImage = document.createElement('h3')
            titleImage.classList.add('titleImage')
            titleImage.setAttribute('tabindex', '0')
            // titleImage.textContent= `${imageCarrousel}`
            // document.querySelector('.carrouselImage').append(titleImage)

            document.querySelector('.carrouselImage').innerHTML
            document.querySelector('.lightbox').classList.add('show') // OKAY  LES IMAGES S'AFFICHENT
            
            // JE DOIS RAJOUTER AUSSI LE TITRE DES IMAGES

        } else {
            const videoElement = document.createElement('video') // LA VIDEO NE S'AFFICHENT PAS
            videoElement.setAttribute('src', videoPhoto)
            videoElement.setAttribute('type', 'video/mp4') // ICI HUM HUM ENDSWITH('.mp4)
            videoElement.setAttribute('width', '100%')
            videoElement.setAttribute('tabindex', '0')
            videoElement.setAttribute('controls', true)
            document.querySelector('.carrouselImage a').innerHTML = ''
            document.querySelector('.carrouselImage a').append(videoElement)
            document.querySelector('.carrouselImage').innerHTML
            document.querySelector('.lightbox').classList.add('show')           
        }


    }
  
    close() {
        document.querySelector('.lightbox').classList.remove('show')    
    }
}
