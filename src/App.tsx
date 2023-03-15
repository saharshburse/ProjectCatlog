import React from 'react';

import './App.css';
// import UploadImage from './AdminComponent/UploadImage/UploadImage';
import LoginPage from './Components/Login_page/login-page';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import DashBoard from './AdminComponent/DashBoard/DashBoard';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import CreateAccount from './Components/create-account/create-account';
import ProductList from './Components/ProductList/ProductList';
import PrivateRoutes from './AdminComponent/PrivateRoutes/PrivateRoutes';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter basename='/ProjectCatlog'>
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <Routes >
        <Route path='/' element={ <Home />}/>
        
        <Route path='/login' element={ <LoginPage />}/>
        <Route path='/Gallery' element={ <ImageGallery />}/>
        <Route path='/CreateAccount' element={ <CreateAccount />}/>

        <Route path='/Gallery/:id' element={ <ImageGallery />}/>
        <Route path='/List' element={ <ProductList />}/> 


        <Route element={<PrivateRoutes/>}>
             <Route path='/admin/*' element={<DashBoard  />}/>
        </Route>

      </Routes>
      <footer>
        <Footer/>
      </footer>
     
    </div>
    </BrowserRouter>
  );
}

export default App;