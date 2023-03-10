import React from 'react'
import {Link} from 'react-router-dom'
import './erreur.css'

function Erreur() {
    return (
        <main className='erreurMain'>
            <div className='conteneurTitreEtMessageErreur'>
                <h1 className='erreurTitre'>404</h1>
                <p className='erreurMessage'>
                    <span className='erreurTexte1'>Oups! La page que</span>
                    <span className='erreurTexte2'> vous demandez n'existe pas.</span>
                </p>
            </div>
            <div className='conteneurErreurLien'>
                <Link to='/' className='erreurLienAccueil'>Retourner sur la page d'accueil</Link>
            </div>      
        </main>
    )
}

export default Erreur