import React from 'react';

const ProductosCategoria = (props) => {
  console.log(props);
  return (
    <div>Categoria: {props.match.params.categoria}</div>
  );
};

export default ProductosCategoria;
