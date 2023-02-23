import React from 'react';

import './App.css';
// import UploadImage from './AdminComponent/UploadImage/UploadImage';
import LoginPage from './Components/Login_page/login-page';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import DashBoard from './AdminComponent/DashBoard/DashBoard';
import ImageGallery from './Components/ImageGallery/ImageGallery';

function App() {
  return (
    <BrowserRouter basename='/ProjectCatlog'>
    <div className="App">
      <header>

      </header>
      <Routes >
        <Route path='/' element={ <Home />}/>
        <Route path='/admin/*' element={<DashBoard  />}/>
        <Route path='/login' element={ <LoginPage />}/>
        <Route path='/Gallery' element={ <ImageGallery />}/>
      </Routes>
      
     
    </div>
    </BrowserRouter>
  );
}

export default App;