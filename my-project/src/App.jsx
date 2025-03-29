import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from './MainPage/MainPage.jsx';
import { Routes, Route } from "react-router-dom";
import NewCollection from './Clothes/New/NewCollection/NewCollection.jsx';
import NewOuter from './Clothes/New/NewOuter/NewOuter.jsx';
import NewInner from './Clothes/New/NewInner/NewInner.jsx';
import NewPants from './Clothes/New/NewPants/NewPants.jsx';

function App() {
 

  return (
    <>
     

      

      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/log-in" element={<MainPage/>}/>
        <Route path="/sign-up" element={<MainPage/>}/>
        <Route path="/log-out" element={<MainPage/>}/>
        <Route path="/my-page" element={<MainPage/>}/>
        
        <Route path="/new-collection"element={<NewCollection/>}/>
        <Route path="/new-outer"element={<NewOuter/>}/>
        <Route path="/new-inner"element={<NewInner/>}/>
        <Route path="/new-pants"element={<NewPants/>}/>

        <Route path="/women-outer"element={<MainPage/>}/>
        <Route path="/women-tshirtssweat"element={<MainPage/>}/>
        <Route path="/women-shirtblouse"element={<MainPage/>}/>
        <Route path="/women-knitwearcardigan"element={<MainPage/>}/>
        <Route path="/women-innerwear"element={<MainPage/>}/>
        <Route path="/women-pants"element={<MainPage/>}/>
        <Route path="/men-outer"element={<MainPage/>}/>
        <Route path="/men-tshirtssweat"element={<MainPage/>}/>
        <Route path="/men-shirtblouse"element={<MainPage/>}/>
        <Route path="/men-knitwearcardigan"element={<MainPage/>}/>
        <Route path="/men-innerwear"element={<MainPage/>}/>
        <Route path="/men-pants"element={<MainPage/>}/>
        <Route path="/kids-outer"element={<MainPage/>}/>
        <Route path="/kids-tshirtssweat"element={<MainPage/>}/>
        <Route path="/kids-innerwear"element={<MainPage/>}/>
        <Route path="/kids-pants"element={<MainPage/>}/>
      </Routes>

     <div></div>



 
    </>
  )
}

export default App;
