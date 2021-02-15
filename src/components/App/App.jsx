import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
//hocs
import ProtectedRoute from '../../hocs/ProtectedRoute.jsx';
// components
import Main from '../Main/Main.jsx';
import About from '../About/About.jsx';
import SavedNews from '../SavedNews/SavedNews.jsx';
import Footer from '../Footer/Footer.jsx';
import LoginModal from '../LoginModal/LoginModal.jsx';
import SignupModal from '../SignupModal/SignupModal.jsx';
import InfoTooltip from '../InfoTooltip/InfoTooltip.jsx';
import HeaderAuthMenu from '../Header/HeaderAuthMenu/HeaderAuthMenu.jsx';
// api
import api from '../../utils/api.js';
// contexts
import { CurrentUserContext } from '../../contexts/currentUserContext/currentUserContext';
import { CurrentPageContext, currentPage } from '../../contexts/currentPageContext/currentPageContext.js';

const App = () => {
  // user states
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // modal states
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [signupError, setSignupError] = useState(false);
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  // modals logics
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
    setSignupError(false);
    setLoginError(false);
  };
  const closeModalsByEsc = (evt) => {
    evt.key === 'Escape' && closeAllModals();
  };
  // creating a new account
  const handleSignup = (email, password, name) => {
    api
      .createUser(email, password, name)
      .then(() => {
        setIsInfoTooltipOpen(true);
        setIsSignupModalOpen(false);
      })
      .catch((err) => {
        setSignupError(true);
        console.error(err);
      });
  };
  // signing in
  const handleLogin = (email, password) => {
    api
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          tokenCheck();
        }
        closeAllModals();
      })
      .catch((err) => {
        setLoginError(true);
        console.error(err);
      });
  };
  // signing out
  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setUser({});
    setIsLoggedIn(false);
  };
  // checking if the token is ok
  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api
        .getCurrentUser(jwt)
        .then((user) => {
          const { name, email } = user;
          setUser({
            name,
            email,
          });
          setIsLoggedIn(true);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    tokenCheck();
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
            <Main
              openLoginModal={openLoginModal}
              toggleAuthMenu={toggleAuthMenu}
              isLoggedIn={isLoggedIn}
              handleSignOut={handleSignOut}
            />
            <About />
          </Route>
          <ProtectedRoute
            component={SavedNews}
            path='/saved-news'
            toggleAuthMenu={toggleAuthMenu}
            isLoggedIn={isLoggedIn}
            handleSignOut={handleSignOut}
          />
        </Switch>
        <Footer />
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={closeAllModals}
          switchToSigupModal={switchToSigupModal}
          onLogin={handleLogin}
          loginError={loginError}
        />
        <SignupModal
          isOpen={isSignupModalOpen}
          onClose={closeAllModals}
          switchToLoginModal={switchToLoginModal}
          onSignup={handleSignup}
          signupError={signupError}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllModals}
          switchToLoginModal={switchFromInfoTooltipToLoginModal}
        />
        <HeaderAuthMenu
          isOpen={isAuthMenuOpen}
          toggleAuthMenu={toggleAuthMenu}
          openLoginModal={switchFromAuthMenuToLoginModal}
          isLoggedIn={isLoggedIn}
          handleSignOut={handleSignOut}
        />
      </CurrentPageContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default App;
