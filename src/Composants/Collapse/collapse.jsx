import React, {useState} from 'react'
import flecheFermetureMenuDeroulant from '../../Ressources/flechePourFermerLeMenuDeroulant.png'
import flecheOuvertureMenuDeroulant from '../../Ressources/flechePourOuvrirLeMenuDeroulant.png'
import './collapse.css'

function Collapse({titre,contenu,classConteneurMenuDeroulant,classMenuDeroulantTitre,classMenuDeroulantTexte,classConteneurPrincipalMenuDeroulant,classMenuDeroulantContenu}) {

    /* estOuvert est une variable d'état (state) de type booléen permettant de sauvegarder l'état de la boite déroulante 
    (ouverte ou fermer) .Le Hook useState() a pour valeur initiale false car au début du programme la boite déroulante 
    est fermée. Ici, estOuvert correspond à l'état actuel du state et setEstOuvert est la fonction permettant de modifiée le
    state. Le Hook useState() renvoir une paire de valeur : l'état actuel et la fonction pour le modifié*/
    const [estOuvert, setEstOuvert] = useState(false) 

    /* Si le state estOuvert vaut true, alors on affiche la boite déroulante avec son contenu*/
    return estOuvert ? (
        <div className={classConteneurPrincipalMenuDeroulant}>
            <div className={classConteneurMenuDeroulant}>
                <div className='conteneurMenuDeroulantTitre'>
                    <h2 className={classMenuDeroulantTitre}>{titre}</h2>
                    <img src={flecheFermetureMenuDeroulant} alt='Flèche pour fermer le menu déroulant' className='flecheFermetureMenu' onClick={()=> setEstOuvert(false)} />
                    {/*Au clic sur l'image de la flèche, la fonction setEstOuvert initialise le state à false donc la boite
                    déroulante ne s'affiche plus*/}
                </div>
                <div className={classMenuDeroulantTexte}>
                    <ul className='menuDeroulantTexteListeDesElements'>
                        {/*Si le contenu reçu par le Collapse est une string alors on l'affiche dans une balise <li>,
                        c'est le cas lorsque Collapse reçoit du contenu depuis le composant APropos 
                        Sinon si le type de contenu est autre alors on affiche tous les éléments dans des balises <li>
                        c'est le cas lorsque Collapse reçoit du contenu depuis le composant FicheLogement car le contenu
                        transmis est un objet / un tableau contenant les équipements du logement*/}
                        {   typeof contenu === 'string' ? 
                            ( <li className={classMenuDeroulantContenu}>{contenu}</li>)
                            :
                            ( contenu.map((element,index) => ( 
                            <li className={classMenuDeroulantContenu} key={`${element}-${index}`}>{element}</li>)) 
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
        ) : (
        <div className={classConteneurPrincipalMenuDeroulant}>    
            <div className={classConteneurMenuDeroulant}>
                {/*Si le state estOuvert vaut false, alors on affiche la boite déroulante sans son contenu */}
                <div className='conteneurMenuDeroulantTitre'>
                    <h2 className={classMenuDeroulantTitre}>{titre}</h2>
                    <img src={flecheOuvertureMenuDeroulant} alt='Flèche pour ouvrir le menu déroulant' className='flecheOuvertureMenu' onClick={()=> setEstOuvert(true)}/>
                </div>
            </div>
        </div>
    )
}

export default Collapse