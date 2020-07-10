import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from './../assets/img/logo.png';

const Header = () => (
  <AppBar possition="sticky">
    <Toolbar>
      <img src={logo} alt="logo" width="32" height="32" />
      <h1>Nutricional App</h1>
    </Toolbar>
  </AppBar>
);

Header.displayName = 'Header';

export default Header;
