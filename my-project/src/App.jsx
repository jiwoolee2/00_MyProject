import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from './MainPage/MainPage.jsx';
import { Routes, Route } from "react-router-dom";

import SignUp from './SignPage/SignUp/SignUp.jsx';
import LogIn from './SignPage/LogIn/LogIn.jsx';
import ClothesPage from './Clothes/ClothesPage.jsx';

function App() {
 

  return (
    <>
     

      

      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/log-in" element={<LogIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/log-out" element={<MainPage/>}/>
        <Route path="/my-page" element={<MainPage/>}/>
        <Route path="/productinfo/:category/:type" element={<ClothesPage/>}/>
        {/* <Route path="/new-collection" element={<NewCollection/>}/> */}

      </Routes>

     <div></div>



 
    </>
  )
}

export default App;
