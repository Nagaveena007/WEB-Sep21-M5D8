import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MusicDetail from './components/MusicDetail'
import SearchSongs from './components/SearchSongs'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SearchSongs />} />
        <Route path='/details/:id' element={<MusicDetail />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
