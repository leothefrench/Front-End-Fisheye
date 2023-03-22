class Lightbox {
    constructor(listElement) {
        this._currentElement = null;
        this._listElement = listElement;

        this.manageEvent()
    }

    //POUR AFFICHER LA MODALE LORS DU CLIC UTILISATEUR 
    show(id) {
        this._currentElement = this.getElementById(id);
        this.display();
    }
    // POUR AFFICHER L'IMAGE SUIVANTE
    next() {
        let index = this._listElement.findIndex(element => element.id == this._currentElement.id)

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
        if( index == 0) {
            this._currentElement = this._listElement[this._listElement.length - 1];
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
        let idInListElement = this._listElement.find(element => element.id == id);
        return idInListElement;
    }

    display() {

        const image = `assets/photographers/${this._currentElement.image}`       
        const videoPhoto = `assets/photographers/${this._currentElement.video}`

        const imageCarrousel = `${this._currentElement.title}`
        
        if (this._currentElement.image) { 
            const img = document.createElement('img')
            img.setAttribute('src', image)
            img.setAttribute('tabindex', '0')
            document.querySelector('.carrouselImage a').innerHTML = ''

            const titleImage = document.createElement('h3')
            titleImage.classList.add('titleImage')
            titleImage.setAttribute('tabindex', '0')
            titleImage.textContent= `${imageCarrousel}`

            document.querySelector('.carrouselImage a').append(img)
            document.querySelector('.carrouselImage a').append(titleImage)
            document.querySelector('.carrouselImage').innerHTML

            document.querySelector('.lightbox').classList.add('show')
            

        } else {
            const videoElement = document.createElement('video')
            videoElement.setAttribute('src', videoPhoto)
            videoElement.setAttribute('type', 'video/mp4')
            videoElement.setAttribute('height', '92%')
            videoElement.setAttribute('tabindex', '0')
            videoElement.setAttribute('controls', true)
            document.querySelector('.carrouselImage a').innerHTML = ''

            const titleImage = document.createElement('h3')
            titleImage.classList.add('titleImage')
            titleImage.setAttribute('tabindex', '0')
            titleImage.textContent= `${imageCarrousel}`

            document.querySelector('.carrouselImage a').append(videoElement)
            document.querySelector('.carrouselImage a').append(titleImage)
            document.querySelector('.carrouselImage').innerHTML

            document.querySelector('.lightbox').classList.add('show')           
        }

    }
    close() {
        document.querySelector('.lightbox').classList.remove('show')    
    }
}
