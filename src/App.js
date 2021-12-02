import React from 'react';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/login/Login';
import GlobalStyles from './components/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

const theme = {
  container: {
    maxWidth: '50rem',
    padding: '0 1rem',
    margin: '0 auto',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} end />
          <Route path="/login" element={<Login />} end />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
