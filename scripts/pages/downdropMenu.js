// CREATION DE LA FONCTION DROPDOWN MENU POUR FILTRAGE DES CHOIX UTILISATEUR
    function dropDownMenu(data) {

      // CREATION SECTION CONTENANT TITRE H3 & DROPDOWN MENU
      const sectionFilter = document.createElement('section')
      sectionFilter.classList.add('filter')
      // CREATION DU TITRE H3
      const titleTrierPar = document.createElement('h3')
      titleTrierPar.classList.add('trier-par')
      titleTrierPar.setAttribute('tabindex', '0')
      titleTrierPar.textContent = 'Trier par'
      sectionFilter.appendChild(titleTrierPar)
      // CREATION DROPDOWN MENU 
      const divDropdownMenu = document.createElement('div')
      divDropdownMenu.classList.add('dropdown')
      sectionFilter.appendChild(divDropdownMenu)

      const select = document.createElement('div')
      select.classList.add('select')
      divDropdownMenu.appendChild(select)

      const spanSelected = document.createElement('button') // Avant bouton
      spanSelected.classList.add('selected')
      spanSelected.textContent = 'Popularité'
      select.appendChild(spanSelected)

      const divArrow = document.createElement('div')
      divArrow.classList.add('arrow')
 
      divArrow.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'
      select.appendChild(divArrow)

      // CREATION DE LA DIV CONTENANT LES 3 CHOIX CLIQUABLE DU MENU DEROULANT
      const divContainerChoice = document.createElement('div')
      divContainerChoice.classList.add('filter-options-container')
      divContainerChoice.setAttribute('role', 'listbox')

      // CREATION DES TROIS SPANS TAG POUR LES 3 CHOIX
      const aFirstChoicePopularite = document.createElement('button')
      const aSecondChoiceDate = document.createElement('button')
      const aThirdChoiceTitre = document.createElement('button')

      //FIRST CHOICE - POPULARITE
      aFirstChoicePopularite.classList.add('filter-option')
      aFirstChoicePopularite.classList.add('active')
      aFirstChoicePopularite.setAttribute('role', 'option')
      aFirstChoicePopularite.setAttribute('aria-label', 'Trier par popularité')
      aFirstChoicePopularite.setAttribute('aria-selected', 'true')
      aFirstChoicePopularite.setAttribute('id', 'popularite')
      aFirstChoicePopularite.setAttribute('tabindex', '0')
      aFirstChoicePopularite.textContent = "Popularité"
      // SECOND CHOICE - DATE
      aSecondChoiceDate.classList.add('filter-option')
      aSecondChoiceDate.classList.add('btn-date')
      aSecondChoiceDate.setAttribute('role', 'option')
      aSecondChoiceDate.setAttribute('aria-label', 'Trier par date')
      aSecondChoiceDate.setAttribute('aria-selected', 'false')
      aSecondChoiceDate.setAttribute('id', 'date')
      aSecondChoiceDate.setAttribute('tabindex', '0')
      aSecondChoiceDate.textContent = "Date"
      // THIRD CHOICE - TITRE
      aThirdChoiceTitre.classList.add('filter-option')
      aThirdChoiceTitre.setAttribute('role', 'option')
      aThirdChoiceTitre.setAttribute('aria-label', 'Trier par titre')
      aThirdChoiceTitre.setAttribute('aria-selected', 'false')
      aThirdChoiceTitre.setAttribute('id', 'titre')
      aThirdChoiceTitre.setAttribute('tabindex', '0')
      aThirdChoiceTitre.textContent = "Titre"

      // ADD THREE LINKS IN DIV FILTER-SELECT
      divContainerChoice.appendChild(aFirstChoicePopularite)
      divContainerChoice.appendChild(aSecondChoiceDate)
      divContainerChoice.appendChild(aThirdChoiceTitre)

      divDropdownMenu.appendChild(divContainerChoice)

      const filter = document.querySelector('.filterBloc')
      filter.appendChild(sectionFilter)

// PARTIE JS POUR LE CLIC SUR lES LIENS DU MENU DROPDOWN

// CIBLAGE DES ELEMENTS DU DROPDOWN-MENU
const selectChoix = document.querySelector('.select')
const arrow = document.querySelector('.arrow')
const menu = document.querySelector('.filter-options-container')
const options = document.querySelectorAll('.filter-option')
const selected = document.querySelector('.selected')

 // AJOUT DE L'EVENEMENT CLICK SUR L'ELEMENT SELECT
    selectChoix.addEventListener('click', () => {
        // AJOUT DU STYLE SUR ELEMENT RECEVANT LE CLICK
        selectChoix.classList.toggle('select-clicked')
        // AJOUT DU STYLE POUR LA ROTATION DE LA FLECHE
        arrow.classList.toggle('arrow-rotate')
        // AJOUT DU STYLE MORS DE L'OUVERTURE DU STYLE
        menu.classList.toggle('filter-options-container-open')
    // })

// ON BOUCLE SUR TOUS LES CHOIX (LES OPTIONS)
    options.forEach(option =>  {
        option.addEventListener('click', () => {
        selected.innerText = option.innerText
        arrow.classList.remove('arrow-rotate')
        menu.classList.remove('filter-options-container-open')
        });

        //Supprime active de toutes les options
    options.forEach(option => {
        option.classList.remove('active')
        });
            // AJOUT ACTIVE AUX 3 OPTIONS
            option.classList.add('active')
        });
    })

    const globalPhotos = document.querySelector('.globalPhotos')
    lightbox(data.media)
    // CREATION DE LA FONCTION POUR LA GENERATION DE LA PAGE PHOTOGRAPHE APRES FILTRAGE 
    document.querySelectorAll('.filter-option').forEach((el) => {
      el.addEventListener('click', () => {
        const id = el.id;

        switch (id) {
          case 'date':
            
          const filterDate = data.media.sort((a, b) => {
              return new Date(b.date) - new Date(a.date)
            })

            globalPhotos.innerHTML ='';
            filterDate.forEach(media => {
                const photographerModel = factoryMedia(media);
                const userCardDOM = photographerModel.getUserCardDOM();
                globalPhotos.appendChild(userCardDOM);
            });

            comptageLike() // REHYDRATATION DES ADD EVENT LISTENER
            lightbox(data.media) 

            break
          case 'popularite':

            const filterPopularite = data.media.sort((a, b) => (a.likes < b.likes ? 1 : -1))
            
            globalPhotos.innerHTML ='';
            filterPopularite.forEach(media => {
                const photographerModel = factoryMedia(media);
                const userCardDOM = photographerModel.getUserCardDOM();
                globalPhotos.appendChild(userCardDOM);
            });

            comptageLike() // REHYDRATATION DES ADD EVENT LISTENER
            lightbox(data.media) 
            break
          case 'titre':

            const filterTitre = data.media.sort((a, b) => (a.title > b.title ? 1 : -1))

            globalPhotos.innerHTML ='';
                filterTitre.forEach(media => {
                const photographerModel = factoryMedia(media);
                const userCardDOM = photographerModel.getUserCardDOM();
                globalPhotos.appendChild(userCardDOM);
            });

            comptageLike() // REHYDRATATION DES ADD EVENT LISTENER
            lightbox(data.media) 
            break
            
          default:
            break
        }
      })
    })
    return (sectionFilter)
}


