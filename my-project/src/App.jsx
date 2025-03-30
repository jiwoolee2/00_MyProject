import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from './MainPage/MainPage.jsx';
import { Routes, Route } from "react-router-dom";
import NewCollection from './Clothes/New/NewCollection/NewCollection.jsx';

import SignUp from './SignPage/SignUp/SignUp.jsx';
import LogIn from './SignPage/LogIn/LogIn.jsx';

function App() {
 

  return (
    <>
     

      

      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/log-in" element={<LogIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/log-out" element={<MainPage/>}/>
        <Route path="/my-page" element={<MainPage/>}/>
        
        <Route path="/new-collection"element={<NewCollection/>}/>
 

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
