import React from 'react'
import './notationAvecEtoiles.css'
import etoileEnCouleur from '../../Ressources/etoileEnCouleur.png'
import etoileGrise from '../../Ressources/etoileGrise.png'

function NotationAvecEtoiles ({notation}) {

    // Tableau pour stocker des balises <img /> contenant des étoiles de couleur et/ou grise
    let tableauContenantLesEtoiles = []

    // On boucle 5 fois car il faut ajouter 5 étoiles dans le tableau de notation
    for(let i=0 ; i < 5 ; i++) {
        if(i < notation) {
            // Si l'indice de parcours est inférieur à la notation alors on ajoute une balise <img/> contenant une étoile de
            //couleur dans le tableau
            tableauContenantLesEtoiles.push(<img src={etoileEnCouleur} alt='Etoile en couleur'/>)
        }
        else{
            // Sinon on ajoute une balise <img/> contenant une étoile grise dans le tableau
            tableauContenantLesEtoiles.push(<img src={etoileGrise} alt='Etoile grise'/>)
        }
    }

    return (
        <div>
        {/*On retourne le tableau de notation avec chaque étoile dans une <span> */}
            {tableauContenantLesEtoiles.map((imageEtoile,index) => (
                <span key={`${imageEtoile}-${index}`} className='conteneurImageEtoile'>{imageEtoile}</span>
            ))}
        </div>
    )
}

export default NotationAvecEtoiles