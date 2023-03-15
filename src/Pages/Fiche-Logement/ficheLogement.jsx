import React from 'react'
import {useParams, Navigate} from 'react-router-dom'
import Slideshow from '../../Composants/Slideshow/slideshow.jsx'
import NotationAvecEtoiles from '../../Composants/NotationAvecEtoiles/notationAvecEtoiles.jsx'
import logements from '../../Ressources/logements.json'
import './ficheLogement.css'
import Collapse from '../../Composants/Collapse/collapse.jsx'

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

    // Gestion de la redirection avec le composant Navigate / Gestion de l'erreur sur l'id du propriété 
    // Si aucun logement n'est trouvé dans le fichier json ayant l'id valant celui entré dans l'URL alors l'utilisateur
    // est redirigé vers la page d'erreur 404
    if(donneesDuLogement === undefined)
    {
        return <Navigate to='/Erreur404'></Navigate>
    }   

    return (
        <main>
            <div className='conteneurDuComposantCaroussel'>
                {/*On envoi dans le composant Slideshow la props 'pictures' contenant les images du logement sur lequel
                l'utilisateur a cliqué dans la page Home*/}
                <Slideshow pictures={donneesDuLogement.pictures}/>
            </div>
            <div className='conteneurNiveau1DesInformationsLogement'>
                <div className='conteneurNiveau2DesInformationsLogement'>
                    <div className='conteneurInformationsLogement1'>
                        <div className='conteneurTitreLocationTagsDuLogement'>
                            <div className='conteneurTitreDuLogement'>
                                <h1 className='titreDuLogement'>{donneesDuLogement.title}</h1>        
                            </div>
                            <div className='conteneurLocationDuLogement'>
                                <p className='locationDuLogement'>{donneesDuLogement.location}</p>
                            </div>
                            <div className='conteneurTagsDuLogement'>
                                <ul className='listeDesTagsDuLogement'>
                                {/*Les Tags du logement sont affichés sous forme de liste à puce dans des <li> */}
                                {donneesDuLogement.tags.map((tag,index) => (
                                    <li className='tagDuLogement' key={`${tag}-${index}`}><p className='tagTexte'>{tag}</p></li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className='conteneurHostNomImageNote'>
                            <div className='conteneurHostNomImage'>
                                <p className='hostNom'>{donneesDuLogement.host.name}</p>
                                <img className ='hostImage' src={donneesDuLogement.host.picture} alt={donneesDuLogement.host.name}/>
                            </div>
                            <div className='conteneurNotationEtoiles'>
                                {/*Utilisation d'un composant pour gérer l'affichage des étoiles colorés et grise */}
                                <NotationAvecEtoiles notation={donneesDuLogement.rating}/>        
                            </div>            
                        </div>
                    </div>
                    <div className='conteneurInformationsLogement2'>
                        <div className='conteneurDesMenuDeroulantsDescripEquip'>
                            <div className='conteneurMenuDeroulantDescription'>
                                {/*Utilisation de deux composants de boite déroulantes pour afficher la description
                                et l'équipement du logement */}
                                <Collapse 
                                titre='Description' 
                                contenu={donneesDuLogement.description} 
                                classConteneurMenuDeroulant='conteneurMenuDeroulant2' 
                                classMenuDeroulantTitre='menuDeroulantTitre2' 
                                classMenuDeroulantTexte='menuDeroulantTexte2' 
                                classConteneurPrincipalMenuDeroulant='conteneurPrincipalMenuDeroulant2'
                                classMenuDeroulantContenu='menuDeroulantContenu2'
                                />        
                            </div>
                            <div className='conteneurMenuDeroulantEquipements'>
                                <Collapse 
                                titre='Équipements' 
                                contenu={donneesDuLogement.equipments} 
                                classConteneurMenuDeroulant='conteneurMenuDeroulant2' 
                                classMenuDeroulantTitre='menuDeroulantTitre2' 
                                classMenuDeroulantTexte='menuDeroulantTexte2' 
                                classConteneurPrincipalMenuDeroulant='conteneurPrincipalMenuDeroulant2'
                                classMenuDeroulantContenu='menuDeroulantContenu2'
                                />
                            </div>                           
                        </div>
                    </div>
                </div>
            </div> 
        </main>
    )
}

export default FicheLogement