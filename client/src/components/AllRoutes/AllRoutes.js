import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Auth from '../Pages/Auth/Auth';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/Auth' element={<Auth/>}/>
    </Routes>
  )
}

export default AllRoutes