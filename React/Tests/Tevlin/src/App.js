import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';
import './components/Main/Main.css';
import Navbar from "../src/components/Main/Navbar/Navbar.jsx"
import Location from './components/Main/Section/Links/Location.jsx';
import Settings from "../src/components/Main/Section/Links/Settings.jsx"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Footer2 from './components/Footer/Footer2.jsx';



function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <section className='main'>
       <Navbar/>    
       <div className='section'>
       <Routes>
        <Route path='/location' Component={Location}/>
        <Route path='/settings' Component={Settings}/>                
      </Routes>             
        </div>    
      </section> 
      <Routes>
      <Route path='/location' Component={Footer2}
        />              
      <Route path='/settings' Component={Footer}
        />        
      </Routes>
    </div>    
    </BrowserRouter>
  );
}

export default App;
