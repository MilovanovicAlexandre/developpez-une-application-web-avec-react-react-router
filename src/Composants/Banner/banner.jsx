import React from 'react'
import './banner.css'

function Banner (props){

    // On récupères les 3 propos du composants Banner grâce à la destructuration
    const  {imgSrc, imgAlt, imgTexteAccompagnement,classConteneurBanniere} = props

    return (
        <div className={classConteneurBanniere}>
            <div className='conteneurBanniere'>
                <img src={imgSrc} alt={imgAlt} className='imageBanniere'/>
            </div>
            <h1 className='texteBanniere'>{imgTexteAccompagnement}</h1>
        </div>
    )
}

export default Banner