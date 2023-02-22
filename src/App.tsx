import React from 'react';

import './App.css';
import UploadImage from './AdminComponent/UploadImage/UploadImage';
import LoginPage from './Components/Login_page/login-page';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter basename='/ProjectCatlog'>
    <div className="App">
      <header>

      </header>
      <Routes >
        <Route path='/' element={ <Home />}/>
        <Route path='/admin' element={<UploadImage  />}/>
        <Route path='/login' element={ <LoginPage />}/>
        
      </Routes>
      
     
    </div>
    </BrowserRouter>
  );
}

export default App;