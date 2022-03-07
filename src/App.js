import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat.js'
function App() {
  return (
    //BEM naming convention
    <>
      <div className="app">
        <div className='appBody'>
          <BrowserRouter>
          <Sidebar/>
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
