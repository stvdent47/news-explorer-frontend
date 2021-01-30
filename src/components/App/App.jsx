import React from 'react';
import './App.css';
import Main from '../Main/Main.jsx';
import About from '../About/About.jsx';
import SavedNews from '../SavedNews/SavedNews.jsx';
import Footer from '../Footer/Footer.jsx';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
