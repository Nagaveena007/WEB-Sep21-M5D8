import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MusicDetail from './components/MusicDetail'
import Search from './components/Search'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/musicDetail/:id' element={<MusicDetail />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
