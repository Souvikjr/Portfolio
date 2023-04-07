import './App.css';
// import Education from './components/Education/Education';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
// import Second from './components/Second/Second';
import React, { Routes, Route } from 'react-router-dom';
import Ghosterror from './components/Ghosterror/Ghosterror';

function App() {
  return (
    <div className="ss">
      <Navbar />
      {/* <Home/>
     
      <Second/>
      
      <Education/> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Ghosterror/>} />
        {/* <Route path='/Signin' element={<Login />} /> */}
      </Routes>


    </div>
  );
}

export default App;
