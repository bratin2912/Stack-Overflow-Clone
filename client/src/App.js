import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter} from "react-router-dom"
import AllRoutes from './components/AllRoutes/AllRoutes';
import { useEffect } from 'react';
import { getQuestions } from './redux/actions/askQuestion';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './redux/actions/users';
function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getQuestions())
  },[dispatch])
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <AllRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App;
