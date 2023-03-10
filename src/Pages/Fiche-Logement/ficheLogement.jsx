import React from 'react'
import {useParams} from 'react-router-dom'
import Slideshow from '../../Composants/Slideshow/slideshow.jsx'
import logements from '../../Ressources/logements.json'
import './ficheLogement.css'

function FicheLogement () {

    //Le Hook userParams permet de récupérer le paramètre (c'est à dire l'id du logement) de l'URL courante de la page 
    //de logement. Ce paramètre id du logement est transmis via le Link en cliquant sur une card(une image) depuis la page Home
    // Le composant Card a un lien sur chaque Card(image) qui envoi vers /Fiche-Logement/${logementDonnees.id}
    // Dans le router on a pour la route du composant FicheLogement: path='/Fiche-Logement/:logementId' donc on extrait
    // avec le hook useParams le paramètre logementId situé dans l'URL 
    const { logementId } = useParams()
    
    // La variable 'donneesDuLogement' permet de stocker les données du logement correspondant à l'id du logement récupérer
    // dans l'URL avec useParams ainsi on récupère dans ce composant FicheLogement les données du logement sur lequel 
    // l'utilisateur a cliqué dans la page Home 
    let donneesDuLogement

    // On parcours tous les logements du fichier json et on trouve le logement ayant l'id récupérer dans l'url avec useParams
    logements.forEach((logement) => {
        
        if(logement.id ===logementId){
            donneesDuLogement=logement
        }
    })

    return (
        <main>
            <div className='conteneurDuComposantCaroussel'>
                {/*On envoi dans le composant Slideshow la props 'pictures' contenant les images du logement sur lequel
                l'utilisateur a cliqué dans la page Home*/}
                <Slideshow pictures={donneesDuLogement.pictures}/>
            </div>
        </main>
    )
}

export default FicheLogement