import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Error from './components/Error';
import List from './components/List';
import FooterComponent from './components/FooterComponent';




const App=() =>{

  return(
  <>
  <List/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route component ={<Error/>} />
</Routes>
<FooterComponent/>
  </>
  )

}
export default App;