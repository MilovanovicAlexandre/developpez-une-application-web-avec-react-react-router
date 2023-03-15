import React from 'react'
import './banner.css'

function Banner (props){

    // On récupère les 4 props du composant Banner grâce à la destructuration
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