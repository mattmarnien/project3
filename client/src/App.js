import React from "react";
import Nav from './components/Nav'
import { BrowserRouter } from "react-router-dom";
import Footer from './components/Footer'
import Library from './components/Library'

function App() {
  
  
  return (
    <>
    
    <Nav />
    <Library />
    
    
    <BrowserRouter>
    <>
    </>
    </BrowserRouter>
    
    <Footer />
  
    </>
  );
}

export default App;
