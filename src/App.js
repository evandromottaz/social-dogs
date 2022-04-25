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
import Photo from './components/photo/Photo';
import UserProfile from './components/user/UserProfile';
import NotFound from './components/NotFound';
import Styles from './components/styles/App.styled';

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
      <Styles>
        <BrowserRouter basename="/">
          <UserStorage>
            <Header />
            <main>
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
                <Route path="foto/:id" element={<Photo />} />
                <Route path="perfil/:user" element={<UserProfile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </UserStorage>
        </BrowserRouter>
      </Styles>
    </ThemeProvider>
  );
}

export default App;
