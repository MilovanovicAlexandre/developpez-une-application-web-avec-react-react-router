import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Erreur from './Pages/Erreur/erreur.jsx'
import Header from './Composants/Header/header.jsx'
import Footer from './Composants/Footer/footer.jsx'
import Home from './Pages/Home/home.jsx'
import APropos from './Pages/A-Propos/aPropos.jsx'
import FicheLogement from './Pages/Fiche-Logement/ficheLogement.jsx'

function App() {
  return (
    <div className='App'>
      <Router>
        {/*Le composant Routes est l'équivalent du composant Switch 
        Si les 3 premières routes n'ont pas été trouvée alors le composant Erreur404 est appelé
        */}
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='Home' />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Fiche-Logement/:logementId' element={<FicheLogement />}/> 
          <Route path='/A-Propos' element={<APropos />}/> 
          <Route path='*' element={<Erreur />}/>
        </Routes>
        <Footer />  
      </Router>
    </div>
  )
}

export default App
