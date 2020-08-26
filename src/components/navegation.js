import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './navegation.module.css'

const Navigation = () => {

  const navStyles = {
    display: 'flex',
    justifyContent: 'space-around'
  };

  const activeStyle = {
    color: 'orangered'
  };

  return (
    <nav style={navStyles}>
      <NavLink to="/" exact activeStyle={activeStyle}>home</NavLink>
      <NavLink to="/clientes" activeClassName={Styles.navActive}>clientes</NavLink>
      <NavLink to="/productos" activeStyle={activeStyle}>productos</NavLink>
    </nav>
  );
};

export default Navigation;
