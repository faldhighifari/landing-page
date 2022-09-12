
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Hero/>}/>
      </Routes>
      <About/>
      <Portfolio/>
      <Clients/>
      <Blog/>
      <Contact/>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
