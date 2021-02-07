import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// components
import Main from '../Main/Main.jsx';
import About from '../About/About.jsx';
import SavedNews from '../SavedNews/SavedNews.jsx';
import Footer from '../Footer/Footer.jsx';

import { CurrentPageContext, currentPage } from '../../contexts/currentPageContext/currentPageContext.js';

const App = () => {
  return (
    <CurrentPageContext.Provider value={currentPage}>
      <Switch>
        <Route exact path='/'>
          <Main />
          <About />
        </Route>
        <Route>
          <SavedNews exact path='/saved-news' />
        </Route>
      </Switch>
      <Footer />
    </CurrentPageContext.Provider>
  );
};

export default App;
