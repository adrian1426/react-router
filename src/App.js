import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './components/home';
import Productos from './components/productos';
import Clientes from './components/clientes';
import Navigation from './components/navegation';

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Route path='/' exact render={Home} />
      <Route path='/clientes' render={Clientes} />
      <Route path='/productos' render={Productos} />
      <Redirect from="/pro" to="/productos" />
    </BrowserRouter>
  );
}

export default App;
