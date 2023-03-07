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
         
         let idInListElement = this._listElement.find(element => element.id == id);
         console.log(idInListElement)
        return idInListElement;
    }


display() {
        const image = `assets/photographers/${this._currentElement.image}`; // CORRECTION A FAIRE - CAR NOS AVONS AUSSI DES VIDEOS
        
        
        const img = document.createElement('img')
        img.setAttribute('src', image)
        img.setAttribute('width', '500px')
        document.querySelector('.carrouselImage a').innerHTML = ''
        document.querySelector('.carrouselImage a').append(img)
        document.querySelector('.carrouselImage').innerHTML
        document.querySelector('.lightbox').classList.add('show')
    }
  
    close() {
        document.querySelector('.lightbox').classList.remove('show')    
    }
}
