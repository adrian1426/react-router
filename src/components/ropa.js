import React from 'react';

const Ropa = (props) => {
  const query = new URLSearchParams(props.location.search);
  const color = query.get('color');
  const talla = query.get('talla');

  return (
    <div>
      <h2>Ropa Color : {color}</h2>
      <h3>Talla: {talla}</h3>
    </div>
  );
};

export default Ropa;
