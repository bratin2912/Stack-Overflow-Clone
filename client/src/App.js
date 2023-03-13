import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
