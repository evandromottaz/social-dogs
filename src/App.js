import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/login/Login';
import GlobalStyles from './components/styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import { UserStorage } from './UserContext';
import User from './components/user/User.js';
import ProtectRoute from './components/helper/ProtectRoute';

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
    primary: '#fb1',
    ctaShadow: '#feb',
    ctaText: '#764701',
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
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectRoute>
                  <User />
                </ProtectRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
