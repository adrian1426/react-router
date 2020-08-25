import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';
import Productos from './components/productos';

function App() {
  return (
    <BrowserRouter>
      <Route path='/home' component={Home} />
      <Route path='/productos' component={Productos} />
      <section>
        <Route path='/productos' component={Productos} />
      </section>
    </BrowserRouter>
  );
}

export default App;
