import Encabezado from './Encabezado';
import Pie from './Pie';
import Principal from './Principal';
import { Routes, Route, Outlet, Link } from "react-router-dom";
// import Lista from './componentes/lista/Lista';
// import Detalles from './componentes/nueva/Detalles';

function Layout() {
    return (
      <div className="App">
        <Encabezado></Encabezado>
        <Principal>
          <Outlet></Outlet>
          {/* <Lista></Lista> */}
          {/* <Detalles></Detalles> */}
        </Principal>
        <Pie></Pie>
      </div>
    );
}

export default Layout;