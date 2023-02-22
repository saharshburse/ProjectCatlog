import React from 'react';

import './App.css';
import UploadImage from './AdminComponent/UploadImage/UploadImage';
import LoginPage from './Components/Login_page/login-page';
import { HashRouter,Route,Routes } from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <header>

      </header>
      <Routes >
        <Route path='/ProjectCatlog' element={ <Home />}/>
        <Route path='/ProjectCatlog/admin' element={<UploadImage  />}/>
        <Route path='/ProjectCatlog/login' element={ <LoginPage />}/>
        
      </Routes>
      
     
    </div>
    </HashRouter>
  );
}

export default App;