import './App.css';

import { Routes, Route } from 'react-router';
import Layout from './componentes/compartidos/Layout';

import Lista from './componentes/lista/Lista';
import Detalles from './componentes/nueva/Detalles';
import NoEncontrado from './componentes/compartidos/NoEncontrado';
import Modal from './componentes/compartidos/Modal';
import { pedirMetas } from './servicios/Pedidos';
import { useContext, useEffect } from 'react';
import { Contexto } from './servicios/Memoria'

function App() {

  const [, enviar] = useContext(Contexto);

  useEffect( () => {
    (async function () {
      const metas = await pedirMetas();
      enviar({ tipo: "colocar", metas });
    })();
  }, [enviar]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Lista />} />
        <Route path="/lista" element={<Lista />}>
          <Route
            path="/lista/:id"
            element={
              <Modal>
                <Detalles />
              </Modal>
            }
          ></Route>
        </Route>
        <Route path="/nueva" element={<Detalles />}></Route>
      </Route>
      <Route path="*" element={<NoEncontrado />}></Route>
    </Routes>
  );
}

export default App;
