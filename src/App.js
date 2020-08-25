import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';
import Productos from './components/productos';
import Clientes from './components/clientes';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/productos/' strict component={Productos} />
      <Route path='/Clientes' sensitive component={Clientes} />
    </BrowserRouter>
  );
}

export default App;
