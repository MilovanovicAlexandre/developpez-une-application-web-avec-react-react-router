import React from 'react'
import Banner from '../../Composants/Banner/banner.jsx'
import imageBanniere from '../../Ressources/imageBannierePageAPropos.png'
import Collapse from '../../Composants/Collapse/collapse.jsx'
import './aPropos.css'

function APropos() {

    // Données à afficher sur la page APropos
    const donneesAPropos= [
        {
            titre:'Fiabilité',
            contenu:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
        },
        {
            titre:'Respect',
            contenu:'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        },
        {
            titre:'Service',
            contenu:'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'
        },
        {
            titre:'Sécurité',
            contenu:'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
        }
    ]

    return (
        <main>
            {/*Appel du composant de la bannière */}
            <Banner imgSrc={imageBanniere} imgAlt='La bannière' imgTexteAccompagnement='' classConteneurBanniere='conteneurPrincipalBanniere2'/>

            <div className='conteneurDesCollapse'>
                {/*L'index est utilisé comme clé pour les composants Collapse qui sont mapper avec map() */}
                {donneesAPropos.map((donneeAPropos,index) => {
                    return  <Collapse 
                            key={index} 
                            titre={donneeAPropos.titre} 
                            contenu={donneeAPropos.contenu} 
                            classConteneurMenuDeroulant='conteneurMenuDeroulant' 
                            classMenuDeroulantTitre='menuDeroulantTitre' 
                            classMenuDeroulantTexte='menuDeroulantTexte' 
                            classConteneurPrincipalMenuDeroulant='conteneurPrincipalMenuDeroulant'
                            classMenuDeroulantContenu='menuDeroulantContenu'
                            />
                })}
            </div>
        </main>
    )
}

export default APropos