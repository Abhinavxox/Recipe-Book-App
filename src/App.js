import React from 'react';
import FirstPage from './components/FirstPage';
import Navbar from './components/NavBar';
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Recipe from './components/Recipe';

function App() {


  return (
    <BrowserRouter>
      <div className='main-wrapper'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={FirstPage} />
          <Route path='/:recipe' component={Recipe} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
