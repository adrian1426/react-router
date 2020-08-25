import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';
import Productos from './components/productos';
import Clientes from './components/clientes';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />

      {/*
       el método componente utiliza internamente el React.createElement
       por lo tanto por cada renderizado react creará un nuevo componente
       */}
      <Route path='/componente' component={() => (<div>Hola amigos</div>)} />

      {/*
       React recomienda utilizar render, cuando los componentes son funcionales
       para no crearlos varios veces con component
       */}
      <Route path='/productos' render={Productos} />

      {/*
       Siempre será renderizado
       */}
      <Route path='/clientes'>
        {
          (props) => {
            console.log(props);
            return (
              <Clientes />
            )
          }
        }
      </Route>
    </BrowserRouter>
  );
}

export default App;
