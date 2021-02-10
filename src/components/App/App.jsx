import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// components
import Main from '../Main/Main.jsx';
import About from '../About/About.jsx';
import SavedNews from '../SavedNews/SavedNews.jsx';
import Footer from '../Footer/Footer.jsx';
import LoginModal from '../LoginModal/LoginModal.jsx';
import SignupModal from '../SignupModal/SignupModal.jsx';
import HeaderAuthMenu from '../Header/HeaderAuthMenu/HeaderAuthMenu.jsx';
// contexts
import { CurrentPageContext, currentPage } from '../../contexts/currentPageContext/currentPageContext.js';

const App = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const switchToSigupModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const switchToLoginModal = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const toggleAuthMenu = () => {
    setIsAuthMenuOpen(!isAuthMenuOpen);
  };

  const switchFromAuthMenuToLoginModal = () => {
    toggleAuthMenu();
    setIsLoginModalOpen(true);
  };

  const closeAllModals = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
  };

  return (
    <CurrentPageContext.Provider value={currentPage}>
      <Switch>
        <Route exact path='/'>
          <Main openLoginModal={openLoginModal} toggleAuthMenu={toggleAuthMenu} />
          <About />
        </Route>
        <Route>
          <SavedNews exact path='/saved-news' toggleAuthMenu={toggleAuthMenu} />
        </Route>
      </Switch>
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeAllModals} switchToSigupModal={switchToSigupModal} />
      <SignupModal isOpen={isSignupModalOpen} onClose={closeAllModals} switchToLoginModal={switchToLoginModal} />
      <HeaderAuthMenu
        isOpen={isAuthMenuOpen}
        toggleAuthMenu={toggleAuthMenu}
        openLoginModal={switchFromAuthMenuToLoginModal}
        username='TESTINGTESTING'
      />
    </CurrentPageContext.Provider>
  );
};

export default App;
