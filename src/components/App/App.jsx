import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
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
import api from '../../utils/MainApi.js';
// contexts
import { CurrentUserContext } from '../../contexts/currentUserContext/currentUserContext';

const App = () => {
  // user states
  const [currentUser, setcurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //
  const history = useHistory();
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
  const onRegister = (email, password, name) => {
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
  const onLogin = (email, password) => {
    api
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          localStorage.removeItem('articles');
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
  const onSignOut = () => {
    localStorage.clear();
    setcurrentUser({});
    setIsLoggedIn(false);
    history.push('/'); // непонятно зачем, но так в чеклисте
  };
  // checking if the token is correct
  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api
        .getCurrentUser(jwt)
        .then((user) => {
          setIsLoggedIn(true);
          const { name, email } = user;
          setcurrentUser({
            name,
            email,
          });
        })
        .catch((err) => console.error(err));
    }
  };
  // getting saved articles for a user
  const fetchSavedArticles = () => {
    api
      .getSavedArticles()
      .then((articles) => localStorage.setItem('savedArticles', JSON.stringify(articles)))
      .catch((err) => console.error(err));
  };
  // saving an article
  const saveArticle = (article) => {
    // saving is only possible if a user is logged in, if not => open login modal
    if (isLoggedIn) {
      const keyword = localStorage.getItem('keyword');
      api
        .saveArticle(article, keyword.toLowerCase())
        .then((res) => fetchSavedArticles())
        .catch((err) => console.error(err));
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const deleteArticleMainPage = (articleId) => {
    api
      .deleteArticle(articleId)
      .then(() => {
        fetchSavedArticles();
        const articlesFromLocalStorage = JSON.parse(localStorage.getItem('savedArticles'));
        const newArticles = articlesFromLocalStorage.filter((item) => articleId !== item._id);
        localStorage.setItem('savedArticles', JSON.stringify(newArticles));
      })
      .catch((err) => console.error(err));
  };

  const deleteArticleSavedNews = (articleId, setSavedArticlesCb) => {
    api
      .deleteArticle(articleId)
      .then(() => {
        fetchSavedArticles();
        const articlesFromLocalStorage = JSON.parse(localStorage.getItem('savedArticles'));
        const newArticles = articlesFromLocalStorage.filter((item) => articleId !== item._id);
        localStorage.setItem('savedArticles', JSON.stringify(newArticles));
        setSavedArticlesCb(newArticles);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    tokenCheck();

    if (history.location.state && history.location.state.noAuthRedirect) {
      setIsLoginModalOpen(true);
      history.replace('/');
    }
  }, [history]);

  useEffect(() => {
    isLoggedIn && fetchSavedArticles();
  }, [isLoggedIn]);

  useEffect(() => {
    document.addEventListener('keydown', closeModalsByEsc);
    return () => {
      document.removeEventListener('keydown', closeModalsByEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path='/'>
          <Main
            openLoginModal={openLoginModal}
            toggleAuthMenu={toggleAuthMenu}
            isLoggedIn={isLoggedIn}
            onSignOut={onSignOut}
            saveArticle={saveArticle}
            deleteArticle={deleteArticleMainPage}
          />
          <About />
        </Route>
        <ProtectedRoute
          component={SavedNews}
          path='/saved-news'
          toggleAuthMenu={toggleAuthMenu}
          isLoggedIn={isLoggedIn}
          onSignOut={onSignOut}
          deleteArticle={deleteArticleSavedNews}
        />
        <Route path='/*'>
          <Redirect to='/' />
        </Route>
      </Switch>
      <Footer />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeAllModals}
        switchToSigupModal={switchToSigupModal}
        onLogin={onLogin}
        loginError={loginError}
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={closeAllModals}
        switchToLoginModal={switchToLoginModal}
        onRegister={onRegister}
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
        onSignOut={onSignOut}
      />
    </CurrentUserContext.Provider>
  );
};

export default App;
