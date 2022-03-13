import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat.js'
import Page404 from "./Page404";
import Login from "./Login";
function App() {
  const [user,setUser]=useState(null)
  return (
    //BEM naming convention
    <>
      <div className="app">
       {!user?<Login />:
        <div className='appBody'>
        <BrowserRouter>
        <Sidebar/>
          <Routes>
          {/* <Route path="/" element={<Sidebar />} /> */}
            <Route path="/rooms/:roomId" element={<Chat />} />
            <Route path="*" element={<Page404 />} />

          </Routes>
        </BrowserRouter>
      </div>}
      </div>
    </>
  );
}

export default App;
