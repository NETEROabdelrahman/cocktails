import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
import { AppProvider } from './Context';
import './App5.css'
function App5() {


 


  return (
    <Router>
      
        <AppProvider>
          
      <Routes>
        <Route path='/' element={<Navbar />} >

          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cocktail/:id' element={<SingleCocktail />} />
          <Route path='*' element={<Error />} />
          
        </Route>

      </Routes>
</AppProvider>
      
    </Router>
  );
}

export default App5;


