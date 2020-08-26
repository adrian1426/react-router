import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';
import Productos from './components/productos';
import Clientes from './components/clientes';
import Navigation from './components/navegation';
import ProductosCategoria from './components/productosCategoria';
import Ropa from './components/ropa';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path='/' exact render={Home} />
      <Route path='/clientes' render={Clientes} />
      <Route path='/productos' exact render={Productos} />
      <Route path='/productos/:categoria/:id?' render={ProductosCategoria} />
      <Route path='/ropa' render={Ropa} />
    </BrowserRouter>
  );
}

export default App;
