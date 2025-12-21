import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Projects from './components/Projects';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import theme from './theme';
import './styles/global.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Clients />
          <Projects />
          <Consultation />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;