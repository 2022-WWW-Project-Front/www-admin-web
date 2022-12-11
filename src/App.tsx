import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/Signin'
import NoInformation from './pages/NoInformation'
import RegisterStep1 from './pages/RegisterInformation/RegisterStep1'
import RegisterStep2 from './pages/RegisterInformation/RegisterStep2'
import RegisterStep3 from './pages/RegisterInformation/RegisterStep3'
import EditGenreAuthor from './pages/EditInformation/EditGenreAuthor'
import EditArtist from './pages/EditInformation/EditArtist'
import EditWork from './pages/EditInformation/EditWork'
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/NoInformation" element={<NoInformation />} />
        <Route path="/RegisterStep1" element={<RegisterStep1 />} />
        <Route path="/RegisterStep2" element={<RegisterStep2 />} />
        <Route path="/RegisterStep3" element={<RegisterStep3 />} />
        <Route path="/EditGenreAuthor" element={<EditGenreAuthor />} />
        <Route path="/EditArtist" element={<EditArtist />} />
        <Route path="/EditWork" element={<EditWork />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
