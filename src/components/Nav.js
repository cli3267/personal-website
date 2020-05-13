import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import about from './About';
import home from './Home';
const Nav = () => {
  return (
    <Router>
      <div>
        <header>
          <nav className='navbar navbar-expand-lg navbar-dark'>
            <div className='container-fluid'>
              <div className='navbar-header'>
                <a className='navbar-brand'>Christina Li</a>
              </div>
              <div className='nav navbar-right'>
                <NavLink
                  id='link'
                  className='navlink navbar-brand'
                  exact
                  to='/'
                  activeStyle={{ color: '#9BD1FA' }}
                >
                  Home
                </NavLink>
                <NavLink
                  id='link'
                  className='navlink navbar-brand'
                  to='/about'
                  activeStyle={{ color: '#9BD1FA' }}
                >
                  About
                </NavLink>
              </div>
            </div>
          </nav>
        </header>
        <Route exact path='/' component={home} />
        <Route path='/about' component={about} />
      </div>
    </Router>
  );
};

export default Nav;
