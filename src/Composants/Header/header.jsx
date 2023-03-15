import React from 'react'
import {Link} from 'react-router-dom'
import logoHeader from '../../Ressources/logoHeader.png'
import './header.css'

function Header() {
    return (
        <header>    
            <div className='conteneurLogoEtNavigation'>
                <div className='conteneurLogo'>
                    <Link to='/Home'><img src={logoHeader} alt='Logo Kasa' className='logoHeader' /></Link>
                </div>
                <nav className='conteneurDeTouteLaNavigation'>
                    <ul className='conteneurNavigation'>
                        {/*La navigation affiché sous forme de liste à puce <li> avec des composants Link pour les liens */}
                        <li className='conteneurLienAccueil'><Link to='/Home' className='lienAccueil'>Accueil</Link></li>
                        <li className='conteneurLienAPropos'><Link to='/A-Propos' className='lienAPropos'>A propos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header