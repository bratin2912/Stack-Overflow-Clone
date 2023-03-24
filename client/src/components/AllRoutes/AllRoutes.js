import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Auth from '../Pages/Auth/Auth';
import Home from '../Pages/Home/Home';
import Questions from '../MainBar/Questions';
import Askquestion from '../AskQuestion/Askquestion';
import DisplayQuestion from '../MainBar/DisplayQuestion';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/Auth' element={<Auth/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Questions' element={<Questions/>}/>
        <Route path='/AskQuestion' element={<Askquestion/>}/>
        <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
    </Routes>
  )
}

export default AllRoutes