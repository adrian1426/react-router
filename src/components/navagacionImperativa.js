import React from 'react';

const NavegacionImperativa = ({ history }) => {
  console.log('NavegacionImperativa: ', history);
  return (
    <div>
      <button onClick={history.goBack}>atras</button>
      <button onClick={history.goForward}>adelante</button>
      <button onClick={() => history.go(2)}>Go</button>
      <button onClick={() => {
        history.push('/clientes')
      }}>push</button>
      <button onClick={() => {
        history.replace('/clientes')
      }}>reemplazar</button>
    </div>
  );
};

export default NavegacionImperativa;