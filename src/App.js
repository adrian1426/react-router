import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Productos from './components/productos';
import Clientes from './components/clientes';
import Navigation from './components/navegation';
import ProductosCategoria from './components/productosCategoria';
import Ropa from './components/ropa';

function App() {
  return (
    <BrowserRouter>
      {/* switch, renderiza solo rutas únicas, si hay repetidas, renderiza el primero que encuentra. */}
      <Switch>
        <Route path='/' exact render={Home} />
        <Route path='/productos' render={Clientes} />
        <Route path='/productos' render={Productos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
