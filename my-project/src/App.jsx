import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from './MainPage/MainPage.jsx';
import { Routes, Route } from "react-router-dom";

import SignUp from './SignPage/SignUp/SignUp.jsx';
import LogIn from './SignPage/LogIn/LogIn.jsx';
import ClothesPage from './Clothes/ClothesPage.jsx';
import { Provider } from './LogInStatement/AuthContext.jsx';
import Header from './Include/Header/Header.jsx';
import MyPage from './SignPage/MyPage/MyPage.jsx';
import WriteBoard from './Board/WriteBoard.jsx';
import Board from './Board/Board.jsx';
import BoardDetail from './Board/BoardDetail.jsx';

function App() {
 

  return (
    <>
     

      
    <Provider>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/log-in" element={<LogIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/log-out" element={<Header/>}/>
        <Route path="/my-page" element={<MyPage/>}/>
        <Route path="/board" element={<Board/>}/>
        <Route path="/write-board" element={<WriteBoard/>}/>
        <Route path="/boards/:boardNo" element={<BoardDetail/>}></Route>
        
        <Route path="/productinfo/:category/:type" element={<ClothesPage/>}/>
        {/* <Route path="/new-collection" element={<NewCollection/>}/> */}

      </Routes>

     
     </Provider>


 
    </>
  )
}

export default App;
