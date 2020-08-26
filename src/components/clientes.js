import React from 'react';
import { Redirect } from 'react-router-dom';

const isAuth = false;

const Clientes = () => {
  if (isAuth) {
    return (
      <div>
        <p>clientes</p>
      </div>
    );
  } else {

    return (
      <Redirect to={{ pathname: '/', state: { message: 'debes iniciar sesión' } }} />
    );
  }
};

export default Clientes;