import React from 'react';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/login/Login';
import GlobalStyles from './components/styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import { UserStorage } from './UserContext';

const theme = {
  container: {
    maxWidth: '50rem',
    padding: '0 1rem',
    margin: '0 auto',
  },
  fonts: {
    typeFirst: 'Helvetica, Arial, sans-serif',
    typeSecond: 'Spectral, Georgia',
  },
  colors: {
    yellow: '',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} end />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
