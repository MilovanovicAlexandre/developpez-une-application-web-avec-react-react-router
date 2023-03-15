import React from 'react'
import {useState} from 'react'
import './slideshow.css'
import flecheGaucheCarrousel from '../../Ressources/flecheGaucheCarrousel.png'
import flecheDroiteCarrousel from '../../Ressources/flecheDroiteCarrousel.png'

function Slideshow ({pictures}) {

    //Création d'une variable state appelée 'indexCourant' permettant de modifié l'index courant du tableau d'images 'pictures' 
    //permettant ainsi de naviguer entre les images 
    const [indexCourant, setIndexCourant] = useState(0)
    // nombre total d'images
    const nbTotalImagesDuLogement =pictures.length

    // Fonction pour changer l'indexCourant lors du clic sur la flèche droite du carrousel
    function defilementDuCarrouselADroite() {
        
        if(indexCourant+1 === nbTotalImagesDuLogement){
            setIndexCourant(0) // si on a atteint la dernière image alors on réaffiche la première image dans le carrousel
        }
        else {
            setIndexCourant(indexCourant+1) // On affiche l'image suivante par rapport à l'indexCourant
        }
    }

    // Fonction pour changer l'indexCourant lors du clic sur la flèche gauche du carrousel
    function defilementDuCarrouselAGauche() {
        if(indexCourant === 0){
            setIndexCourant(nbTotalImagesDuLogement-1)
        }
        else {
            setIndexCourant(indexCourant-1)
        }
    }

    return (
        <div className='conteneurPrincipalDuCarrousel'>
            {/*On affiche dans le carrousel l'image à l'index courant*/}
            <img className='imageCarrousel' src={pictures[indexCourant]} alt='logement affiché'/>
            {/*Si le nombre d'images du tableau du logement est supérieur à 1 alors on affiche les flèches et le compteur
            d'images */}
            { pictures.length >1 ?
            <div className='conteneurCarousselFlechesEtCompteurImages'>
                {/*Déclenchement d'évènement au clic sur les images des flèches permettant d'appeler les fonctions mettant à jour
                l'index courant */}
                <div className='conteneurCarousselFleches'>
                    <img className='flecheGaucheCaroussel' src={flecheGaucheCarrousel} onClick={() => defilementDuCarrouselAGauche()} alt='Flèche gauche du carrousel'/>
                    <img className='flecheDroiteCaroussel' src={flecheDroiteCarrousel} onClick={() => defilementDuCarrouselADroite()} alt='Flèche droite du carrousel'/>
                </div>
                <div className='conteneurCarrouselCompteurImages'>
                    {/*Compteur d'images du carrousel affiché sous forme de fraction */}
                    <p className='compteurImagesDuCarrousel'>{indexCourant+1}/{pictures.length}</p>    
                </div>    
            </div>
            : null
            }            
        </div>
    )
}

export default Slideshow