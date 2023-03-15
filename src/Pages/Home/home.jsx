import React from 'react'
import Banner from '../../Composants/Banner/banner.jsx'
import imageBanniere from '../../Ressources/imageBanniere.png'
import Card from '../../Composants/Card/card.jsx'
import './home.css'
import logements from '../../Ressources/logements.json'

function Home () {
    return (
        <main>
            {/*Appel du composant de la bannière */}
            <Banner 
            imgSrc={imageBanniere} 
            imgAlt='La bannière' 
            imgTexteAccompagnement='Chez vous, partout et ailleurs' 
            classConteneurBanniere='conteneurPrincipalBanniere' 
            />
            <div className='conteneurPrincipalHome'>
                <div className='conteneurCards'>
                    {/*Chaque composant Card a une clé valant l'id de chaque logement, l'ajout d'une clé est nécessaire
                    car en utilisant map on génère une liste d'élément et donc chaque élément doit pouvoir être identifiable
                    par React lorsque celui-ci a besoin de générer de nouveau les composants Card */}
                    {logements.map((logement) => (
                        <Card key={logement.id} logementDonnees={logement}/>
                    ))}
                </div>
            </div>
            
        </main>
    )
}

export default Home