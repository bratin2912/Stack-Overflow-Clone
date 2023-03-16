import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter} from "react-router-dom"
import AllRoutes from './components/AllRoutes/AllRoutes';
import Home from './components/Pages/Home/Home';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Home/>
        <AllRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App;
