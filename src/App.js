import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';//importe les routes
import styled from 'styled-components'; // Importe styled-components
import Header from './Components/Header';//importe le header
import Home from './Components/Home';//importe le home
import About from './Components/About';//importe le about
import Projects from './Components/Projects'//importe le project
import Contact from './Components/Contact'; //importe le contact
import TipCalculator from './Components/TipCalculator'; // Importe le calculateur
import Ludo from './Components/Ludo'; //importe le ludo
import TodoList from './Components/TodoList';// importation du ludo

import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styles pour le conteneur global
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Prend toute la hauteur de l'écran */
  font-family: Arial, sans-serif;

  /* Styles pour les écrans de moins de 768px (mobile) */
  @media (max-width: 768px) {
    padding: 0.5rem;

    /* Exemple : réduire la taille de la police pour les petits écrans */
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  /* Styles pour les écrans de moins de 480px (très petits écrans) */
  @media (max-width: 480px) {
    padding: 0.25rem;

    h1 {
      font-size: 1.2rem;
    }

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

function App() {
  return (
    <Router>
      <AppContainer> {/* Encapsule tout dans AppContainer */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/tip-calculator" element={<TipCalculator />} />
          <Route path="/ludo" element={<Ludo />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </AppContainer>
    </Router>
  );
}

export default App;
