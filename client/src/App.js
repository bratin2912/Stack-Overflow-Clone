import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter} from "react-router-dom"
import AllRoutes from './components/AllRoutes/AllRoutes';
function App() {
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
