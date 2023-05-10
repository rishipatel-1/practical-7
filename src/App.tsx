import React from 'react';
import Form from "./components/LoginPage/Form/Form"
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/LoginPage/Login/Login';
import UserInfo from './components/UserInfo/UserInfo';



function App() {
  return (
    <BrowserRouter>
    <div className="App m-0 p-0">
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/userinfo' element={<UserInfo/>}/>

      </Routes>
      
   
    </div>
    </BrowserRouter>
  );
}

export default App;
