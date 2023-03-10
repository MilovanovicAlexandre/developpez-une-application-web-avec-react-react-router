import React from 'react'
import logoFooter from '../../Ressources/logoFooter.png'
import './footer.css'

function Footer() {
    return (
        <footer>
            <div className='conteneurImageEtTexteDuFooter'>
                <img src={logoFooter} alt='Logo Kasa Footer' className='logoFooter' />
                <p className='texteFooter'>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer