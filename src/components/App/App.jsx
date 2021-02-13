import React, { useState, useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// components
import Main from '../Main/Main.jsx';
import About from '../About/About.jsx';
import SavedNews from '../SavedNews/SavedNews.jsx';
import Footer from '../Footer/Footer.jsx';
import LoginModal from '../LoginModal/LoginModal.jsx';
import SignupModal from '../SignupModal/SignupModal.jsx';
import InfoTooltip from '../InfoTooltip/InfoTooltip.jsx';
import HeaderAuthMenu from '../Header/HeaderAuthMenu/HeaderAuthMenu.jsx';
// contexts
import { CurrentUserContext, currentUser } from '../../contexts/currentUserContext/currentUserContext';
import { CurrentPageContext, currentPage } from '../../contexts/currentPageContext/currentPageContext.js';

const App = () => {
  // const currentUser = useContext(CurrentUserContext);
  // const currentPage = useContext(CurrentPageContext);
  const [user, setUser] = useState(currentUser);
  //
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // modal states
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

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

  const switchFromInfoTooltipToLoginModal = () => {
    setIsInfoTooltipOpen(false);
    setIsLoginModalOpen(true);
  };

  const closeAllModals = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
    setIsInfoTooltipOpen(false);
  };

  const closeModalsByEsc = (evt) => {
    evt.key === 'Escape' && closeAllModals();
  };

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', closeModalsByEsc);
    return () => {
      document.removeEventListener('keydown', closeModalsByEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CurrentUserContext.Provider value={user}>
      <CurrentPageContext.Provider value={currentPage}>
        <Switch>
          <Route exact path='/'>
            <Main openLoginModal={openLoginModal} toggleAuthMenu={toggleAuthMenu} isLoggedIn={isLoggedIn} />
            <About />
          </Route>
          <Route>
            <SavedNews exact path='/saved-news' toggleAuthMenu={toggleAuthMenu} isLoggedIn={isLoggedIn} />
          </Route>
        </Switch>
        <Footer />
        <LoginModal isOpen={isLoginModalOpen} onClose={closeAllModals} switchToSigupModal={switchToSigupModal} />
        <SignupModal isOpen={isSignupModalOpen} onClose={closeAllModals} switchToLoginModal={switchToLoginModal} />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllModals}
          switchToLoginModal={switchFromInfoTooltipToLoginModal}
        />
        <HeaderAuthMenu
          isOpen={isAuthMenuOpen}
          toggleAuthMenu={toggleAuthMenu}
          openLoginModal={switchFromAuthMenuToLoginModal}
          username='TESTINGTESTINGTESTINGTESTING'
        />
      </CurrentPageContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default App;
