import React from 'react';
import { Link } from 'react-router-dom';

const Productos = () => {
  return (
    <div>
      <p>productos</p>
      <nav>
        <Link to='/productos/hogar'>Hogar</Link>
        <Link to='/productos/electronica'>electronica</Link>
        <Link to='/productos/muebles'>muebles</Link>
      </nav>
    </div>
  );
};

export default Productos;