import React from 'react'
import {Link} from 'react-router-dom'
import './card.css'

function Card ({logementDonnees}) {
    return (
        <article className='card'>
            <Link to={`/Fiche-Logement/${logementDonnees.id}`}>
                <img src={logementDonnees.cover} alt={logementDonnees.title} className='imageCard'/>
                <h2 className='titreCard'>{logementDonnees.title}</h2>
            </Link>
        </article>
    )
}

export default Card