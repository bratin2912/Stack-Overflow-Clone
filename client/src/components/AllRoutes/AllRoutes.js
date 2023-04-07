import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Auth from '../Pages/Auth/Auth';
import Home from '../Pages/Home/Home';
import Questions from '../MainBar/Questions';
import Askquestion from '../AskQuestion/Askquestion';
import DisplayQuestion from '../MainBar/DisplayQuestion';
import Tags from '../Pages/Tags/Tags';
import Users from '../Pages/Users/Users';
import UserProfile from '../Pages/UserProfile/UserProfile';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/Auth' element={<Auth/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Questions' element={<Questions/>}/>
        <Route path='/AskQuestion' element={<Askquestion/>}/>
        <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
        <Route path='/Tags' element={<Tags/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/Users/:id' element={<UserProfile/>}/>
    </Routes>
  )
}

export default AllRoutes