import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';
import Productos from './components/productos';
import Clientes from './components/clientes';
import Navigation from './components/navegation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path='/' exact render={Home} />
      <Route path='/productos/:id?' render={Productos} />
      <Route path='/clientes' render={Clientes} />
    </BrowserRouter>
  );
}

export default App;
