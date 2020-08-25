import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

  const navStyles = {
    display: 'flex',
    justifyContent: 'space-around'
  };

  return (
    <nav style={navStyles}>
      {/* 
      ancla
      <a href=""></a>
       */}

      {/* el state llegará por props al componente renderizado */}

      <Link
        to={{
          pathname: '/',
          search: '?ordenar=nombre',
          hash: '#hash-otro',
          state: {
            nombre: 'Adrian',
            edad: 23
          }
        }}
      >
        home
      </Link>
      <Link to="/clientes">clientes</Link>
      <Link to="/productos" replace>productos</Link>
    </nav>
  );
};

export default Navigation;
