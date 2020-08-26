import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';
import Productos from './components/productos';
import Clientes from './components/clientes';
import Navigation from './components/navegation';
import NavegacionImperativa from './components/navagacionImperativa';

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Route render={NavegacionImperativa} />
      <Route path='/' exact render={Home} />
      <Route path='/clientes' render={Clientes} />
      <Route path='/productos' render={Productos} />
    </BrowserRouter>
  );
}

export default App;
